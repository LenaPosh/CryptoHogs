import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ForgotPasswordForm.css';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false); // Добавлено состояние для ошибки
    const [errorMessage, setErrorMessage] = useState(''); // Сообщение об ошибке

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(false); // Сброс ошибки при изменении поля ввода
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false); // Сброс ошибки перед отправкой формы

        // Имитация ответа сервера с ошибкой
        setTimeout(() => {
            const mockResponse = { status: 401, data: { message: 'CryptoHogs account not found.' } };

            if (mockResponse.status === 200) {
                // Обработка успешного запроса
                console.log("Password reset email sent to:", email);
            } else {
                // Обработка ошибки запроса
                setError(true);
                setErrorMessage(mockResponse.data.message); // Установка сообщения об ошибке
            }
        }, 1000);
    };


    return (
        <div className="page-container">
            <div className="main-title">
                CryptoHogs
            </div>
            <div className="form-container-forgot">
                <h2>Reset Password</h2>
                <h6>Enter the email you use for your crypto account</h6>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className={`email-forgot ${error ? 'input-error' : ''}`}
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {error && <div className="error-message">{errorMessage}</div>}

                    <div className="form-footer-forgot">
                        <button className='button-sign-forgot' type="submit">Reset Password</button>
                        <div className='forgot-create-page'>
                            Don’t have an account ? <NavLink className="create-account-link" to="/signup"><span className="forgot-create-text">Create a new account</span></NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className="help-text">
                Need more help ?<NavLink className="link-help-text" to="/contact">Contact us</NavLink>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;


// const handleSubmit = async (event) => {
//     event.preventDefault();
//     setPasswordError(false); // сброс сообщения об ошибке при попытке входа
//     try {
//         const response = await axios.post('URL_API_СЕРВЕРА', {
//             email,
//             password
//         });
//
//         if (response.status === 200) {
//             // обработка успешного входа
//         } else {
//             setPasswordError(true); // установка сообщения об ошибке если пароль неверен
//         }
//     } catch (error) {
//         setPasswordError(true); // установка сообщения об ошибке если произошла ошибка запроса
//     }
// };