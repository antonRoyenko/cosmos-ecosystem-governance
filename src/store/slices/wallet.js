import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wallets: null,
    networks: [],
    transactionResponse: null,
    loading: false,
    activeWallet: null,
    showSplash: true,
};

const wallet = createSlice({
    name: 'wallets',
    initialState,
    reducers: {
        trigger(state) {
            state.loading = true;
        },
        
        failure() {},
        
        success() {},
    },
});

export const { trigger } = wallet.actions;
export default wallet.reducer;
