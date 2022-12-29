import { createReducer } from '@reduxjs/toolkit';
import {
    setErrors,
    setErrorModal,
    setNetworkErrors,
    setArgumentsErrors,
    setValidationErrors,
    setImplementationErrors,
} from '../actions/errorsActions';

const initialState = {
    errors: null,
    networkErrors: null,
    validationErrors: null,
    implementationErrors: null,
    argumentsError: null,
    openErrorModal: false,
};

export const errorsReducer = createReducer(initialState, builder => {
    builder
        .addCase(setErrors, (state, action) => {
            state.errors = action.payload;
        })
        .addCase(setErrorModal, (state, action) => {
            state.openErrorModal = action.payload;
        })
        .addCase(setNetworkErrors, (state, action) => {
            state.networkErrors = action.payload;
        })
        .addCase(setArgumentsErrors, (state, action) => {
            state.argumentsError = action.payload;
        })
        .addCase(setValidationErrors, (state, action) => {
            state.validationErrors = action.payload;
        })
        .addCase(setImplementationErrors, (state, action) => {
            state.implementationErrors = action.payload;
        });
});
