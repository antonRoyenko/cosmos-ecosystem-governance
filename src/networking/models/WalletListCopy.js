import axios from 'axios';
import { ValidationError } from './Errors';
// eslint-disable-next-line import/no-cycle
import { walletActions } from '../../store/actions';

export class WalletList {
    // eslint-disable-next-line class-methods-use-this
    getTxUrl(net) {
        if (net === 'eth') {
            return txHash => `https://etherscan.io/tx/${txHash}`;
        }
        if (net === 'bsc') {
            return txHash => `https://bscscan.com/tx/${txHash}`;
        }
        if (net === 'orai') {
            return txHash => `https://scan.orai.io/txs/${txHash}`;
        }
        if (net === 'cheqd') {
            return txHash =>
                `https://explorer.cheqd.io/transactions/${txHash}`;
        }
        return txHash => `https://www.mintscan.io/${net}/txs/${txHash}`;
    }

    async getWallets() {
        try {
            const qs = require('querystring');
            const params = window.location.search.slice(1);
            const paramsAsObject = qs.parse(params);
            const arr = JSON.parse(paramsAsObject.wallets);
            let wallets = null;
            const res = await axios.get(
                `${process.env.REACT_APP_MAIN_SERVER_URL}/networks.json`,
            );
            const networks = res.data;
            // eslint-disable-next-line
            wallets = arr.length
                ? // eslint-disable-next-line no-eval
                  eval(paramsAsObject.wallets).map(item => ({
                      address: item?.address,
                      network: item?.net,
                      name: networks[item?.net]?.name,
                      code: networks[item?.net]?.code,
                      decimals: networks[item?.net]?.decimals,
                      publicKey: item?.publicKey,
                      from: item?.from,
                      getTxUrl: this.getTxUrl(item?.net),
                  }))
                : new ValidationError();
            return wallets;
        } catch (e) {
            return new ValidationError(e);
        }
    }

    async loadWalletsWithBalances() {
        const wallets = await this.getWallets();
        if (wallets instanceof ValidationError) {
            return wallets;
        }
        try {
            if (wallets.length > 0) {
                for await (const item of wallets) {
                    const wallet = walletActions.getWalletConstructor(item);

                    if (wallet) {
                        let response = await wallet.getWalletBalance();
                        if (response.ok) {
                            item.balance = response.data.mainBalance;
                        } else {
                            response = await wallet.getWalletBalance();
                            item.balance = response?.data?.mainBalance;
                        }
                    }
                }
            }
        } catch (err) {
            console.warn(err);
        }
        return wallets;
    }
}
