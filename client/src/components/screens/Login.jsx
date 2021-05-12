import React from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="loginform container">
            <div className="card">
                <div className="card-content row black-text">
                    <span className="card-title">Instagram</span>
                    <div className="input-field col s12">
                        <input id="email" type="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light #e91e63 pink">Login</button>
                <p> Dont have an account? <Link to='/signup'>Signup Here</Link></p>
            </div>
        </div>
    )
}

export default Login;
