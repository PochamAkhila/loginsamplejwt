import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3009/jwtlogin', {
            username, password
        })
            .then(res => {
                return res
            })
            .then(res => {
                const token = res.data.jwtToken
                localStorage.setItem("jwtToken", token)
                var decoded = jwt_decode(token)
                setUsername(decoded.username)
                nav("/dashboard")
            })
    };

    return (

        <form onSubmit={handleSubmit} style={{ textAlign: "center" }} className="mt-5">
            <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} placeholder='Enter username'className="mb-3" />
            <br />
            <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder='Enter Password' className="mb-3"/>
            <br />
            <button type="submit" className='btn btn-info'>Login</button>
        </form>
    );
};

export default LoginPage;