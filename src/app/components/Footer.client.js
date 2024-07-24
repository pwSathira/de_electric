"use client";
import React from 'react';
import styles from './Footerclient.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faInstagram, faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const FooterClient = () => {
    return (
        <footer className="bg-dark text-light pt-4">
            <div className="container">
                {/* Social Networks Section */}
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center gap-3">
                        <span className="gap-3">
                            Connect with us on social media:
                        </span>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100081929477039"
                               className="me-4 text-reset"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="mailto:info@dnipro.ca"
                               className="me-4 text-reset"><FontAwesomeIcon icon={faEnvelope}/></a>
                            <a href="https://github.com/pwSathira/Dnipro_Electric"
                               className="me-4 text-reset"><FontAwesomeIcon icon={faGithub}/></a>
                        </div>
                    </div>
                </div>
                <hr className="hr"></hr>
                {/* Links and Contact Info Section */}
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h5 className="text-uppercase mb-4">Dnipro Electric Inc.</h5>
                        <img src="/logo.svg" alt="logo" className={styles.logoImage}/>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                        <h5 className="text-uppercase mb-4">About Us</h5>
                        <p>Established in 2015, we are a full-service electrical contractor serving the Greater Toronto Area.
                            We specialize in residential, and commercial services.</p>
                        </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h5 className="text-uppercase mb-4">Navigation</h5>
                        <p><a href="/" className="text-light">Home</a></p>
                        <p><a href="/about" className="text-light">About</a></p>
                        <p><a href="/quotes" className="text-light">Quotes</a></p>
                        <p><a href="/gallery" className="text-light">Gallery</a></p>

                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h5 className="text-uppercase mb-4">Contact</h5>
                        <p><i className="fas fa-home me-2"></i>Vaughan ON, Canada</p>
                        <p><i className="fas fa-envelope me-2"></i>info@dnipro.ca</p>
                        <p><i className="fas fa-phone me-2"></i>+1 (647) 700-5198</p>
                    </div>
                </div>

            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2024 - 2025 Dnipro Electric Inc.
            </div>
        </footer>
    );
};

export default FooterClient;