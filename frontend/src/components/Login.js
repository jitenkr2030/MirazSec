import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
    }, []);

    const handleLogin = async () => {
        try {
            console.log('Sending login request with:', { email, password, role });
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, {
                email,
                password,
                role
            });
            console.log('Login successful', response.data);
            // Handle successful login
        } catch (err) {
            console.error('Error during login:', err);
            if (err.response) {
                console.error('Error response data:', err.response.data);
                setError(err.response.data.message || 'An error occurred during login. Please try again.');
            } else {
                setError('An error occurred during login. Please try again.');
            }
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                {/* Add more roles as needed */}
            </select>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
