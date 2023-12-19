import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you would handle the form submission, e.g., by sending data to your API
        console.log(formData);
    };

    return (
        <div className="page-container-up">
            <div className="main-title">CryptoHogs</div>
            <div className="form-container-up">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        className="input-field-up"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        className="input-field-up"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="input-field-up"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="input-field-up"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        className="input-field-up"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <div className="form-footer">
                        <button className='button-sign' type="submit">Next</button>
                        <div className='login-redirect'>
                            Already have an account? <NavLink className="login-link" to="/signin"><span className="login-text">Sign In</span></NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className="help-text">
                Need more help? <NavLink className="link-help-text" to="/contact">Contact us</NavLink>
            </div>
        </div>
    );
};

export default SignUpForm;
