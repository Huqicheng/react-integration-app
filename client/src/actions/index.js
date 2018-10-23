import {AUTH_USER, AUTH_FAILED} from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post(
            'http://localhost:3090/signup',
            formProps
        );
        dispatch({type: AUTH_USER, payload: response.data.token});
        // persist the token in localStorage
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({type: AUTH_FAILED, payload: 'Email is in use'});
    }
  
};

export const signin = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post(
            'http://localhost:3090/signin',
            formProps
        );
        dispatch({type: AUTH_USER, payload: response.data.token});
        // persist the token in localStorage
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({type: AUTH_FAILED, payload: 'Login Error'});
    }
  
};
        
     
export const signout = () => {
    localStorage.removeItem('token');

    // remove the authentication
    return {
        type: AUTH_USER,
        payload: ''
    };
}