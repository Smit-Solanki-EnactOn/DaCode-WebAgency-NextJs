import React from 'react'
import Image from 'next/image';
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-top-content">
                        <div className="footer-about-company">
                            <a className="footer-logo" href="#">
                                <Image src="/images/dacode-logo.png" alt="DaCode Logo" width={200} height={24} loading='lazy'  />
                            </a>

                            <p className="footer-description">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                            </p>
                        </div>

                        <div className="footer-other-links">
                            <div>
                                <h3>Work</h3>
                                <ul>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">How We Work</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <a href="#">Marketing Strategy</a>
                                    </li>
                                    <li>
                                        <a href="#">Website Optimization</a>
                                    </li>
                                    <li>
                                        <a href="#">Email Marketing</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3>Business Solution</h3>
                                <ul>
                                    <li>
                                        <a href="#">Partnership</a>
                                    </li>
                                    <li>
                                        <a href="#">About Project</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporate</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <h3 className="dropdown-toggle" role="button">
                                    Language
                                </h3>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item">English</a></li>
                                    <li><a className="dropdown-item">Hindi</a></li>
                                    <li><a className="dropdown-item">Gujarati</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-content">
                        <p className="footer-description">
                            © DaCode. 2025
                        </p>
                        <ul className="social-links">
                            <li><a href="#">FB</a></li>
                            <li><a href="#">TW</a></li>
                            <li><a href="#">IG</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer