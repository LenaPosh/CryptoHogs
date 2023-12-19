import React from 'react';
import './PageContent.css';
import {NavLink} from "react-router-dom";

const PageContent = () => {
    return (
        <div className="page-content">
            <div className="header-content">
                <h1 className="header-text">
                    Secure Access Granted: Safeguarding<br />
                    Your Crypto Journey at <span className="crypto-text">CryptoHogs</span>
                </h1>
                <p className="description-text">Decentralized interchain network with extra security designed for everyone</p>
            </div>

            <div className="input-button-container">
                <input type="text" className="input-field" placeholder="Email address" />
                <NavLink className="create-account-link-up" to="/signup"><button className="submit-button">Register Now</button></NavLink>

            </div>
        </div>
    );
};

export default PageContent;

