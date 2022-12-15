import { useState } from 'react';
import { Content, Header, Tabbar, Input } from '@citadeldao/apps-ui-kit/dist/main';
import AddressBlock from '@citadeldao/apps-ui-kit/dist/components/uiKit/AddressBlock'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Config } from '../../config/config';
import { walletActions } from '../../store/actions';
import { prettyNumber } from '../../helpers/numberFormatter';

function SelectAddressPanel() {
    const config = new Config()
    const { wallets, activeWallet } = useSelector(state => state.wallet)
    const [walletList, setWalletList] = useState(wallets)
    const previousPanel = useSelector(state => state.panels.previousPanel)
    const dispatch = useDispatch()
    const { bottomInset } = useSelector(state => state.panels)
    const navigate = useNavigate()
    const back = () => navigate(previousPanel)
    const searchWallet = wallet => {
        const arr = wallets.filter(
          item =>
          item.code.toLowerCase().includes(wallet.toLowerCase()) ||
          item.name.toLowerCase().includes(wallet.toLowerCase()) ||
          item.address.toLowerCase().includes(wallet.toLowerCase()),
        );
        setWalletList(arr);
        if (wallet.length < 1) setWalletList(wallets);
      };
    const setActiveWallet = wallet => {
      dispatch(walletActions.setActiveWallet(wallet))
      back();
    }
    return (
      <div className='panel'>
        <Content>
          <Header border title="Select an address" style={{margin: '8px 0 16px 0'}} onClick={() => back()} back />
          <Input type="search" style={{marginBottom: '10px'}} onChange={searchWallet} placeholder='Start typing..' />
          {walletList?.map((elem,i) =>(
            // eslint-disable-next-line react/no-array-index-key
            <AddressBlock onClick={() => setActiveWallet(elem)} active={activeWallet?.address === elem?.address} style={{marginBottom: '10px'}} data={{...elem, balance: prettyNumber(elem?.balance)}} key={i} />
                ))}
        </Content>
        <Tabbar config={config} bottomInset={bottomInset} />
      </div>
    )
}

export default SelectAddressPanel
