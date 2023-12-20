import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUpForm.css';

const EyeIcon = () => (
    <svg className="confirm-password-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 60 43" fill="none">
        <path d="M30 6.48455C40.3364 6.48455 49.5545 12.3646 54.0545 21.6679C49.5545 30.9711 40.3636 36.8512 30 36.8512C19.6364 36.8512 10.4455 30.9711 5.94545 21.6679C10.4455 12.3646 19.6636 6.48455 30 6.48455ZM30 0.963348C16.3636 0.963348 4.71818 9.54882 0 21.6679C4.71818 33.7869 16.3636 42.3724 30 42.3724C43.6364 42.3724 55.2818 33.7869 60 21.6679C55.2818 9.54882 43.6364 0.963348 30 0.963348ZM30 14.7664C33.7636 14.7664 36.8182 17.8582 36.8182 21.6679C36.8182 25.4775 33.7636 28.5694 30 28.5694C26.2364 28.5694 23.1818 25.4775 23.1818 21.6679C23.1818 17.8582 26.2364 14.7664 30 14.7664ZM30 9.24516C23.2364 9.24516 17.7273 14.8216 17.7273 21.6679C17.7273 28.5142 23.2364 34.0906 30 34.0906C36.7636 34.0906 42.2727 28.5142 42.2727 21.6679C42.2727 14.8216 36.7636 9.24516 30 9.24516Z" fill="#739AE4"/>
    </svg>
);

const EyeSlashIcon = () => (
    <svg className="confirm-password-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
        <path d="M40.4625 48.6473L34.41 42.591C32.0694 43.4279 29.5393 43.5828 27.1141 43.0379C24.6888 42.493 22.4682 41.2706 20.7106 39.513C18.9529 37.7553 17.7305 35.5347 17.1856 33.1095C16.6407 30.6842 16.7957 28.1541 17.6325 25.8135L9.9075 18.0885C3.5175 23.7698 0 30.2273 0 30.2273C0 30.2273 11.25 50.8523 30 50.8523C33.6015 50.8398 37.1623 50.0893 40.4625 48.6473ZM19.5375 11.8073C22.8377 10.3651 26.3985 9.6147 30 9.60229C48.75 9.60229 60 30.2273 60 30.2273C60 30.2273 56.4788 36.681 50.0963 42.3698L42.3638 34.6373C43.2006 32.2967 43.3556 29.7666 42.8106 27.3414C42.2657 24.9161 41.0433 22.6955 39.2857 20.9379C37.528 19.1802 35.3074 17.9578 32.8822 17.4129C30.4569 16.868 27.9268 17.023 25.5863 17.8598L19.5375 11.811V11.8073Z" fill="#3E80FF"/>
        <path d="M20.7186 28.8998C20.5123 30.3409 20.6445 31.8103 21.1047 33.1915C21.5649 34.5728 22.3405 35.8278 23.3699 36.8572C24.3993 37.8867 25.6544 38.6622 27.0356 39.1224C28.4168 39.5826 29.8862 39.7148 31.3274 39.5085L20.7149 28.8998H20.7186ZM39.2811 31.5548L28.6724 20.9423C30.1135 20.736 31.5829 20.8682 32.9641 21.3284C34.3453 21.7886 35.6004 22.5641 36.6298 23.5936C37.6593 24.623 38.4348 25.8781 38.895 27.2593C39.3552 28.6405 39.4874 30.1099 39.2811 31.551V31.5548ZM51.1724 54.0548L6.17236 9.05478L8.82736 6.39978L53.8274 51.3998L51.1724 54.0548Z" fill="#3E80FF"/>
    </svg>
);
const SignUpForm = () => {
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    });

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    };

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
                    <input style={{marginTop: '81px'}}
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
                    <div className="confirm-password-container">
                        <input
                            type={confirmPasswordShown ? "text" : "password"}
                            name="confirmPassword"
                            className="input-field-up"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <div onClick={toggleConfirmPasswordVisibility} className="password-icon-container">
                            {confirmPasswordShown ? <EyeSlashIcon /> : <EyeIcon />}
                        </div>
                    </div>
                    <div className="information-text-with-icon">
                        <i className="information-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M22 22L22 30.25M22 15.885V15.8125M5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22Z" stroke="#635F5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                        <span>Email is not editable.</span>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="terms" name="terms" className="custom-checkbox" />
                        <label htmlFor="terms" className="checkbox-label">I agree to Crypto’s Terms of Service and
                            Privacy Policy.*</label>
                    </div>
                    <button className='button-sign-up' type="submit">Next</button>
                </form>
            </div>
            <div className="help-text">
                Need more help? <NavLink className="link-help-text" to="/contact">Contact us</NavLink>
            </div>
        </div>
    );
};

export default SignUpForm;
