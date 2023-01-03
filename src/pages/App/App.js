import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { MainView } from '../../containers/MainView';
import { store } from '../../store/store';
import { walletActions } from '../../store/slices';
import { SocketManager } from '../../networking/socket';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(walletActions.trigger());
        SocketManager.connect();
    }, [dispatch]);
    
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
