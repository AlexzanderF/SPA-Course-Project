import axios from 'axios';
import { isJWTExpired } from './authService';

axios.interceptors.request.use(
    (reqConfig) => {
        if (!reqConfig.url.includes('login') || !reqConfig.url.includes('register')) {
            if (!isJWTExpired()) {
                const jwtToken = localStorage['token'] || null;
                reqConfig.headers['Authorization'] = `Bearer ${jwtToken}`;
            }
        }
        return reqConfig;
    },
    (err) => {
        return Promise.reject(err);
    }
);