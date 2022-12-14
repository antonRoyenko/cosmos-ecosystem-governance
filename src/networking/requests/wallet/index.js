import { utils } from '@citadeldao/apps-sdk';

const getWalletBalance = data => new utils.Request(
        'get',
        `${process.env.REACT_APP_BACKEND_URL}/${data.network}/${data.address}/wallets/balance`,
        {
          params: {
            token: data.token,
          },
        },
    );

const prepareBaseTransfer = data => new utils.Request(
        'post',
            `${process.env.REACT_APP_BACKEND_URL}/${data.network}/${data.from}/prepareCustomTransaction`,
        {
          data: data.transaction,
        },
    );

const getStakeNodes = () => new utils.Request(
        'get',
        `${process.env.REACT_APP_MAIN_SERVER_URL}/staking-node`,
        {
            params: {
                version: '1.0.4',
            },
        },
    );

const getNetworks = () => new utils.Request(
        'get',
        `${process.env.REACT_APP_MAIN_SERVER_URL}/networks.json`,
    );

export const wallet = {
    getWalletBalance,
    prepareBaseTransfer,
    getStakeNodes,
    getNetworks,
};