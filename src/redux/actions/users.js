import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';

export const register = async(user) => {
    await axios.post(API_URL + '/users/register', user);
}
export const login = async(credentials) => {
    const res = await axios.post(API_URL + '/users/login', credentials);
    localStorage.setItem('authToken', res.data.token);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    });
}