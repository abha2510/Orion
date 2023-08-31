import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AuthContainer, AuthButton, AuthInput } from '../Styles/AuthStyle';
import {login } from "../Redux/Auth/authThunkAction"
const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();
    const message = useSelector(state => state.auth.message);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <AuthContainer>
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <AuthInput type="text" name="username" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
                <AuthInput type="password" name="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>
        </AuthContainer>
    );
};

export default Login;
