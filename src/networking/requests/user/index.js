import { utils } from '@citadeldao/apps-sdk';

const getUserConfig = token => new utils.Request(
        'get',
        `${process.env.REACT_APP_BACKEND_URL}/configs`,
        {
            params: {
                token,
            },
        },
    );

const setUserConfig = (token, config) => new utils.Request(
        'put',
        `${process.env.REACT_APP_BACKEND_URL}/configs`,
        {
            ...config,
            params: {
                ...config.params,
                token,
            },
        });

const getSocketToken = () => new utils.Request(
        'get',
        `${process.env.REACT_APP_BACKEND_URL}/api/profile/socket`,
    );

export const user = {
    getUserConfig,
    setUserConfig,
    getSocketToken,
};