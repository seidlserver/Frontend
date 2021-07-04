import React from 'react';
import '../styles/Login.scss';
import { useState, useEffect } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const performLogin = () =>{
        api.post('/auth/login', {
            'email':email,
            'password':password
        }).then(res => {
            localStorage.setItem("jwt", res.data);
        }).catch((err) => {
            alert("Login failed");
        })
    }

    return (
        <div>
            <form>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button onClick={performLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
