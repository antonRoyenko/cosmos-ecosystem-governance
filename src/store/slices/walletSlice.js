import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wallets: null,
    networks: [],
    transactionResponse: null,
    loading: false,
    activeWallet: null,
    showSplash: true,
};

const walletSlice = createSlice({
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

export const { trigger } = walletSlice.actions;
export default walletSlice.reducer;
