import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section-title">
                    <h4>CryptoHogs</h4>
                    {/* Ссылки или информация */}
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/terms">Terms Of Use</NavLink></li>
                        <li><NavLink to="/community">Community</NavLink></li>
                        <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Products</h4>
                    <ul>
                        <li><NavLink to="/markets">Markets</NavLink></li>
                        <li><NavLink to="/exchange">Exchange</NavLink></li>
                        <li><NavLink to="/buy-crypto">Buy Crypto</NavLink></li>
                        <li><NavLink to="/tradingview">TradingView</NavLink></li>
                        <li><NavLink to="/indices">Crypto Indices</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section" style={{width: '163px'}}>
                    <h4>Support</h4>
                    <ul>
                        <li><NavLink to="/support" >Contact Support</NavLink></li>
                        <li><NavLink to="/request">Request Form</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section" style={{marginRight: '142px'}} >
                    <h4>Contact Us</h4>
                    {/* Контактная информация */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
