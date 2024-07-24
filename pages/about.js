import React, { useEffect, useState } from 'react';
import RootLayout from "@/app/layout";
import dynamic from 'next/dynamic';
import styles from '/src/app/components/About.module.css';
import { useRouter } from "next/router";

const NavbarClient = dynamic(() => import('@/app/components/Navbar.client'), { ssr: false });
const FooterClient = dynamic(() => import('@/app/components/Footer.client'), { ssr: false });

const reviews = [
    "They do business like it should be done. DniPro is competent, efficient, and service oriented.",
    "DniPro Electric provided excellent service and their team was very professional. Highly recommend them for any electrical needs.",
    "The electricians from DniPro were prompt, courteous, and did a fantastic job. Would definitely use their services again."
];

export default function About() {
    const router = useRouter();
    const [currentReview, setCurrentReview] = useState(0);
    const [fade, setFade] = useState(true);

    const handleGetQuotedClick = () => {
        router.push('/quotes');
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
                setFade(true);
            }, 500);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <RootLayout>
            <NavbarClient />
            <div className={styles.banner}>
                <div className={styles.overlay}>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className={styles.aboutSection}>
                <p>
                    Since <span className={styles.highlight}>2015</span>, providing <span className={styles.highlight}>excellent</span> residential and industrial electrical services. Our skilled team handles installations, repairs, maintenance, and upgrades with precision. Committed to customer satisfaction, we ensure safe and efficient electrical systems. Lighting your spaces and powering your future.
                </p>
                <div className={styles.helpSection}>
                    <span className={styles.helpText}>We Can Help</span>
                    <button className={styles.quoteButton} onClick={handleGetQuotedClick}>Get Quoted</button>
                </div>
                <blockquote className={`${styles.blockquote} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                    <p>{reviews[currentReview]}</p>
                </blockquote>
            </div>
            <FooterClient />
        </RootLayout>
    );
}
