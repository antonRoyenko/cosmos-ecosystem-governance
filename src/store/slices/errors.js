import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    errors: null,
    networkErrors: null,
    validationErrors: null,
    implementationErrors: null,
    argumentsError: null,
    openErrorModal: false,
};

const errors = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        setErrors(state, action) {
            state.errors = action.payload;
        },
        setErrorModal(state, action) {
            state.openErrorModal = action.payload;
        },
        setNetworkErrors(state, action) {
            state.networkErrors = action.payload;
        },
        setArgumentsErrors(state, action) {
            state.argumentsError = action.payload;
        },
        setValidationErrors(state, action) {
            state.validationErrors = action.payload;
        },
        setImplementationErrors(state, action) {
            state.implementationErrors = action.payload;
        },
    },
});

export const {
    setErrors,
    setErrorModal,
    setNetworkErrors,
    setArgumentsErrors,
    setValidationErrors,
    setImplementationErrors,
} = errors.actions;

export default errors.reducer;
