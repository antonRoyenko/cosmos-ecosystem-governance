import { utils } from '@citadeldao/apps-sdk';
import { types } from './types';
import { store } from '../store';
import { getRequest } from '../../networking/requests/getRequest';

const requestManager = new utils.RequestManager();
const userRequest = getRequest('user');

const setAuthToken = token => ({
    type: types.SET_OPENED_TRANSACTION,
    payload: token,
});

const loadSocketToken = () => dispatch => {
    try {
        requestManager.send(userRequest.getSocketToken()).then(res => {
            dispatch({
                type: types.SET_SOCKET_TOKEN,
                payload: res.data?.data,
            });
        });
    } catch(err) {
        console.warn(err);
    }
};

const loadUserConfig = async () => {
    const { auth_token: authToken } = store.getState().user;
    try {
        const result = await requestManager.send(userRequest.getUserConfig(authToken));
        console.log(result, '-loadUserConfig');
        store.dispatch({
            type: types.SET_USER_CONFIG,
            payload: result.data && JSON.parse(result.data),
        });
        return result.data && JSON.parse(result.data);
    } catch {
        return null;
    }
};

const setUserConfig = (config = null) => {
    const { auth_token: authToken } = store.getState().user;
    const data = { data: { config } };

    try {
        requestManager.send(userRequest.setUserConfig(authToken, data));
    } catch(err) {
        console.warn(err);
    }
};

export const usersActions = {
    setAuthToken,
    loadSocketToken,
    loadUserConfig,
    setUserConfig,
};
