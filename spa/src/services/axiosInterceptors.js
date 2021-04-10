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

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('expiresIn');
            window.location.href = '/';
        }
        return Promise.reject(err);
    }
);