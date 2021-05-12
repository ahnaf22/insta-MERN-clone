import React from 'react';
import '../../styles/signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="signupform container" >
            <div className="card">
                <div className="card-content row black-text">
                    <span className="card-title">Instagram</span>
                    <div className="input-field col s12">
                        <input id="name" type="text" />
                        <label htmlFor="name">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light #e91e63 pink">Sign Up</button>
                <p>Already have an account? <Link to='/login'>Login Here</Link></p>
            </div>
        </div >
    )
}

export default Signup;
