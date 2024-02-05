"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Navbarclient.module.css';
const NavbarClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const navigate = (url) => {
        router.push(url);
        setIsOpen(false);
    };

    // Function to check if the path is the current path
    const isActive = (path) => {
        return router.pathname === path;
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbarCustom}`}>
            <div className="container-fluid">
                <div className="navbar-brand" onClick={() => navigate('/')}>
                    <img src="/logo.svg" alt="logo" className={styles.logoImage}/>
                </div>
                <button className="navbar-toggler" type="button"
                        onClick={() => setIsOpen(!isOpen)} aria-controls="navbarNav" aria-expanded={isOpen}
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" onClick={() => navigate('/')}>
                            <div className={`nav-link ${isActive('/') ? 'active' : ''} ${styles.otherLink}`}>Home</div>
                        </li>
                        <li className="nav-item" onClick={() => navigate('/about')}>
                            <div
                                className={`nav-link ${isActive('/about') ? 'active' : ''} ${styles.otherLink}`}>About
                            </div>
                        </li>
                        <li className="nav-item" onClick={() => navigate('/quotes')}>
                            <div
                                className={`nav-link ${isActive('/quotes') ? 'active' : ''} ${styles.otherLink}`}>Quotes
                            </div>
                        </li>
                        <li className="nav-item" onClick={() => navigate('/gallery')}>
                            <div
                                className={`nav-link ${isActive('/gallery') ? 'active' : ''} ${styles.otherLink}`}>Gallery
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarClient;
