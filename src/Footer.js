import React from 'react';
import "./style/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section company">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Enterprise</li>
                        <li>Lejro Recruiter</li>
                    </ul>
                </div>
                <div className="footer-section bootcamp">
                    <h3>Bootcamp</h3>
                    <ul>
                        <li>Data Science Bootcamp</li>
                        <li>Data Analyst Bootcamp</li>
                        <li>Full Stack Development Bootcamp</li>
                        <li>Digital Marketing Bootcamp</li>
                    </ul>
                </div>
                <div className="footer-section support">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Terms of Use</li>
                        <li>Privacy Statement</li>
                    </ul>
                </div>
                <div className="footer-section connect">
                    <h3>Connect with us</h3>
                    <div className="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">YouTube</a>
                    </div>
                    <button className="refer-button">Refer and Earn</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 LEJHRO. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
