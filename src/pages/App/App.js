import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { useEffect } from 'react';
import { MainView } from '../../containers/MainView';
import { store } from '../../store/store';
// import { walletActions } from '../../store/actions';
// import { SocketManager } from '../../networking/socket';

function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(walletActions.loadWalletWithBalances());
    //     SocketManager.connect();
    //     // eslint-disable-next-line
    // }, []);
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/*" element={<MainView />} />
          </Routes>
        </HashRouter>
      </Provider>
    );
}

export default App;