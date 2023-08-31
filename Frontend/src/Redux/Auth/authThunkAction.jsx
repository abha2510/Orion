import axios from 'axios';
import { setMessage } from './authAction';

export const register = (formData) => async dispatch => {
    try {
        const response = await axios.post('https://bewildered-suspenders-clam.cyclic.app/signup', formData);
        dispatch(setMessage(response.data.msg));
    } catch (error) {
        const errorMessage = error.response?.data?.msg || 'Registration failed!';
        dispatch(setMessage(errorMessage));
    }
};

export const login = (formData) => async dispatch => {
    try {
        const response = await axios.post('https://bewildered-suspenders-clam.cyclic.app/login', formData);
        localStorage.setItem("authToken", response.data.token); 
        dispatch(setMessage('Login successful!'));
    } catch (error) {
        dispatch(setMessage('Invalid credentials.'));
    }
};
