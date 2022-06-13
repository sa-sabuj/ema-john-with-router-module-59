import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Log In</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />
                    </div>
                    <input type="submit" value="Log In" className="form-submit" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;