import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducers'

import {
   walletMiddleware,
} from './middlewareListeners';

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware => getDefaultMiddleware()
         .concat(walletMiddleware),
});

