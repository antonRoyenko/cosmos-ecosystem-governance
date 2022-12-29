import { errorsReducer } from './errors';
import { panelReducer } from './panel';

export const reducer = {
    errors: errorsReducer,
    panel: panelReducer,
}

// export const state = combineReducers({
//     transaction: TransactionsReducer,
//     user: UserReducer,
//     errors: ErrorReducer,
//     wallet: WalletReducer,
//     panels: PanelReducer,
// });
