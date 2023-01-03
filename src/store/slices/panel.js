import { createSlice } from '@reduxjs/toolkit';

const qs = require('querystring');

const params = window.location.search.slice(1);
const paramsAsObject = qs.parse(params);

const initialState = {
    previousPanel: '/',
    bottomInset: paramsAsObject.bottomInset,
    borderRadius: paramsAsObject.borderRadius,
};

const panel = createSlice({
    name: 'panel',
    initialState,
    reducers: {
        setPreviousPanel(state, action) {
            state.previousPanel = action.payload;
        },
    },
});

export const { setPreviousPanel } = panel.actions;
export default panel.reducer;
