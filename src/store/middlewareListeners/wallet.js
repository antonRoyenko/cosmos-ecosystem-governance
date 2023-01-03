import { createListenerMiddleware } from '@reduxjs/toolkit';

import qs from 'querystring';
import axios from 'axios';
import { walletActions } from '../slices';

const walletListenerMiddleware = createListenerMiddleware();

walletListenerMiddleware.startListening({
    actionCreator: walletActions.trigger,
    effect: async (action, listenerApi) => {
        // Run whatever additional side-effect-y logic you want here
        console.log(listenerApi.getState());

        const params = window.location.search.slice(1);
        console.log(2, params);
        const paramsAsObject = qs.parse(params);
        console.log(3, params);
        const arr = JSON.parse(paramsAsObject.wallets);
        console.log(4, arr);
        const res = await axios.get(
            `${process.env.REACT_APP_MAIN_SERVER_URL}/networks.json`,
        );
        console.log(5, paramsAsObject.wallets);
        console.log(6, res.data);
    },
});

export const walletMiddleware = walletListenerMiddleware.middleware;
