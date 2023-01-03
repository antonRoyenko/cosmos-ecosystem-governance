import { walletReducer, panelReducer, errorsReducer } from '../slices';

export const reducer = {
    errors: errorsReducer,
    panel: panelReducer,
    wallet: walletReducer,
}

// export const state = combineReducers({
//     transaction: TransactionsReducer,
//     user: UserReducer,
//     errors: ErrorReducer,
//     wallet: WalletReducer,
//     panels: PanelReducer,
// });
