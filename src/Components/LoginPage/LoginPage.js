import React, { useState } from "react";
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
import { supabase } from '../../utils/supabase'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user, error } = await supabase.auth.signIn({
                email: username,
                password: password,
            });
            if (user) {
                console.log('Login Successful:', user);
                // Handle post-login logic here, like redirecting the user or storing the login token
            } else {
                console.error('Login failed:', error.message);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
