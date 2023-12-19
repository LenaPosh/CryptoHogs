import React, { useState } from 'react';
import './CodeInput.css';

const CodeInput = () => {
    const initialCode = Array(4).fill('');
    const [code, setCode] = useState(initialCode);

    const handleChange = (value, index) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value.length === 1 && index < 3) {
            const nextSibling = document.querySelector(
                `input[name='code-${index + 1}']`
            );
            if (nextSibling !== null) {
                nextSibling.focus();
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка кода
        console.log(code.join(''));
        // Здесь отправьте код на сервер
    };

    return (
        <form onSubmit={handleSubmit} className="code-input-form">
            <div className="code-inputs-container">
                {initialCode.map((_, index) => (
                    <input
                        key={index}
                        name={`code-${index}`}
                        type="text"
                        maxLength="1"
                        value={code[index]}
                        onChange={(e) => handleChange(e.target.value, index)}
                        className="code-input"
                    />
                ))}
            </div>
        </form>
    );
};

export default CodeInput;
