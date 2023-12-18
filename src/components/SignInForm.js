import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
    return (
        <div className="page-container">
            <div className="main-title">
                CryptoHogs
            </div>

            <div className="form-container">
                <h2>Sign In</h2>
                <form>
                    <input type="email" className="email" placeholder="Email" />
                    <div className="password-container">
                        <input type="password" className="password" placeholder="password"/>
                        <svg className="password-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 60 43" fill="none">
                            <path d="M30 6.48455C40.3364 6.48455 49.5545 12.3646 54.0545 21.6679C49.5545 30.9711 40.3636 36.8512 30 36.8512C19.6364 36.8512 10.4455 30.9711 5.94545 21.6679C10.4455 12.3646 19.6636 6.48455 30 6.48455ZM30 0.963348C16.3636 0.963348 4.71818 9.54882 0 21.6679C4.71818 33.7869 16.3636 42.3724 30 42.3724C43.6364 42.3724 55.2818 33.7869 60 21.6679C55.2818 9.54882 43.6364 0.963348 30 0.963348ZM30 14.7664C33.7636 14.7664 36.8182 17.8582 36.8182 21.6679C36.8182 25.4775 33.7636 28.5694 30 28.5694C26.2364 28.5694 23.1818 25.4775 23.1818 21.6679C23.1818 17.8582 26.2364 14.7664 30 14.7664ZM30 9.24516C23.2364 9.24516 17.7273 14.8216 17.7273 21.6679C17.7273 28.5142 23.2364 34.0906 30 34.0906C36.7636 34.0906 42.2727 28.5142 42.2727 21.6679C42.2727 14.8216 36.7636 9.24516 30 9.24516Z" fill="#739AE4"/>
                        </svg>
                    </div>

                    <div className="form-footer">
                        <button className='button-sign' type="submit">Sign In</button>
                        <NavLink className='forgot' to="/forgot-password">Forgot your password?</NavLink>
                        <NavLink className='forgot-create' to="/signin">New to CryptoHogs?<span className="forgot-create-text"> Create a new account </span></NavLink>
                    </div>
                </form>
            </div>

            <div className="help-text">
                Need more help ?<NavLink className="link-help-text" to="/contact">Contact us</NavLink>

            </div>
        </div>
    );
};

export default SignInForm;


