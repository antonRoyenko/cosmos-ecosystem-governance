import { createReducer } from '@reduxjs/toolkit';
import { setPreviousPanel } from '../actions/panelActions';

const qs = require('querystring');

const params = window.location.search.slice(1);
const paramsAsObject = qs.parse(params);

const initialState = {
    previousPanel: '/',
    bottomInset: paramsAsObject.bottomInset,
    borderRadius: paramsAsObject.borderRadius,
};

export const panelReducer = createReducer(initialState, builder => {
    builder.addCase(setPreviousPanel, (state, action) => {
        state.previousPanel = action.payload;
    });
});
