import React from 'react';
import './components.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Ristorante. All rights reserved.</p>
                <p>Contact us: info@ristorante.com</p>
            </div>
        </footer>
    );
};

export default Footer;