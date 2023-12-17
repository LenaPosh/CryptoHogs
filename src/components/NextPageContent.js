import React from 'react';
import './NextPageContent.css';

const NextPageContent = () => {
    return (
        <div className="next-page-content">
            <div className="info-block">
                <div className="upper-text">
                    <div className="market-title">Cryptocurrency market today</div>
                    <div className="lower-content">
                        <div className="text">View all 700+ coins</div>
                        <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                            <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z" fill="#3E80FF"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="sub-block">
                    <div className="sub-block-text">Name</div>
                    <div className="sub-block-text">Price</div>
                    <div className="sub-block-text">Market Cap</div>
                    <div className="sub-block-text">Change %</div>
                    <div className="sub-block-text">Last(24)</div>
                    <div className="sub-block-text">Action</div>
                </div>

            </div>

            <div className="new-info-block">
                <div className="title-centered">
                    <div className="title">Beginner's Guide</div>
                </div>
                <div className="guide-section-wrapper">
                    <div className="guide-section">
                        <div className="svg-line-column">
                            <div className="svg-with-number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <circle cx="40" cy="40" r="40" fill="#F1EEEE"/>
                                </svg>
                                <div className="svg-text">1</div>
                            </div>
                            <div className="line-between-svg"></div>
                            <div className="svg-with-number-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                                    <circle cx="51" cy="51" r="51" fill="#3E80FF"/>
                                </svg>
                                <div className="svg-text">2</div>
                            </div>
                            <div className="line-between-svg"></div>
                            <div className="svg-with-number">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <circle cx="40" cy="40" r="40" fill="#F1EEEE"/>
                                </svg>
                                <div className="svg-text">3</div>
                            </div>
                        </div>

                        <div className="content-center">
                            <div className="text-block">
                                <div className="signup-block">
                                    <h2 className="signup-title">Sign up</h2>
                                    <div className="signup-content">
                                        <p className="signup-description">Complete Cryptoland account registration</p>
                                        <a href="/signup" className="signup-link">Sign Up</a>
                                    </div>
                                </div>
                                <div className="signup-block-deposit">
                                    <h2 className="signup-title-deposit">Deposit</h2>
                                    <p className="signup-description-deposit">Get ready to trade and invest</p>
                                </div>
                                <div className="signup-block-trade">
                                    <h2 className="signup-title-trade">Trade</h2>
                                    <p className="signup-description-deposit">Take the first step toward profitability</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>


    );
};

export default NextPageContent;
