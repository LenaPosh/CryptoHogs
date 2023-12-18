import React from 'react';
import './NextPageContent.css';
import Luna from '../img/luna.png'

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

                        <div className="image-block">
                            <svg className='btc' xmlns="http://www.w3.org/2000/svg" width="201" height="201" viewBox="0 0 201 201" fill="none">
                                <g clip-path="url(#clip0_90_259)">
                                    <path d="M201 100.5C201 120.377 195.106 139.808 184.063 156.335C173.02 172.862 157.324 185.743 138.96 193.35C120.596 200.957 100.389 202.947 80.8935 199.069C61.3984 195.191 43.491 185.619 29.4358 171.564C15.3806 157.509 5.80894 139.602 1.93112 120.107C-1.94669 100.611 0.0435447 80.4043 7.65015 62.0403C15.2568 43.6763 28.1381 27.9804 44.6652 16.9373C61.1924 5.89422 80.623 0 100.5 0C127.154 0 152.717 10.5884 171.564 29.4358C190.412 48.2832 201 73.8457 201 100.5Z" fill="#F7931A"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4281 45.8918L94.5248 52.0771L99.6868 32.8359L111.235 35.9697L106.274 54.416L115.694 56.9468L120.664 38.2995L132.413 41.4424L127.352 60.1902C127.352 60.1902 146.538 64.4386 151.051 80.0435C155.565 95.6484 141.129 103.844 136.671 104.154C136.671 104.154 153.482 113.373 147.708 131.509C141.933 149.644 124.209 152.888 105.562 148.731L100.5 168.173L88.7506 165.03L93.9127 145.889L84.5936 143.349L79.4315 162.627L67.7735 159.493L72.9447 140.307L49.2358 133.912L55.211 120.646C55.211 120.646 61.8988 122.473 64.4296 123.076C66.9604 123.679 68.5867 121.048 69.2993 118.416C70.0119 115.785 80.7472 72.1771 81.7613 68.5865C82.7754 64.9959 82.3643 62.1911 78.1067 61.0856C73.8492 59.9801 68.0567 58.2533 68.0567 58.2533L71.4281 45.8918ZM94.7258 103.643L88.3303 129.069C88.3303 129.069 120.043 140.517 124.099 124.41C128.156 108.302 94.7258 103.643 94.7258 103.643ZM97.6677 91.5828L103.944 68.285C103.944 68.285 131.098 73.1456 127.754 86.1101C124.41 99.0746 108.403 94.1044 97.6677 91.5828Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_90_259">
                                        <rect width="201" height="201" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <img src={Luna} alt='' style={{width: '134px', height: '134px', flexShrink: '0', marginBottom: '21px' }} />

                            <svg className='eth' xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                <g clip-path="url(#clip0_90_260)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7067 0C89.5403 0 104.041 4.39867 116.374 12.6398C128.708 20.8809 138.321 32.5943 143.998 46.2987C149.674 60.0032 151.159 75.0832 148.266 89.6318C145.372 104.18 138.229 117.544 127.74 128.033C117.251 138.522 103.887 145.665 89.3384 148.559C74.7899 151.453 59.7099 149.968 46.0054 144.291C32.3009 138.614 20.5876 129.001 12.3464 116.668C4.10534 104.334 -0.293335 89.8336 -0.293335 75C-0.293335 55.1088 7.60843 36.0322 21.6737 21.967C35.7389 7.90176 54.8154 0 74.7067 0V0Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7069 16.1047L94.4387 45.5866L114.171 75.0752L74.7069 94.957L35.2433 75.0002L54.9751 45.5116L74.7069 16.1047ZM74.7069 102.9L37.4319 83.0116L74.7069 133.896L111.982 83.0116L74.7069 102.9Z" fill="#343434"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7067 16.1047L94.4385 45.5116L114.17 75.0002L74.7067 60.1025V16.1047Z" fill="#343434"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7067 102.9L112.057 83.0115L74.7067 133.971V102.9Z" fill="#313131"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7067 60.1022L114.17 74.9999L74.7067 94.8817V60.1022Z" fill="#151515"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7069 16.1047L54.9751 45.5116L35.2433 75.0002L74.7069 60.1025V16.1047Z" fill="#8C8C8C"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7066 102.9L37.4316 83.0115L74.7066 133.971V102.9Z" fill="#8A8A8A"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7069 60.1022L35.2433 74.9999L74.7069 94.8817V60.1022Z" fill="#353535"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_90_260">
                                        <rect width="150" height="150" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                    </div>

                </div>


            </div>


        </div>


    );
};

export default NextPageContent;
