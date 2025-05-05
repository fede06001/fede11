import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Restaurant Name</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;