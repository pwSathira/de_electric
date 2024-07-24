import RootLayout from "@/app/layout";
import NavbarClient from "@/app/components/Navbar.client";
import FooterClient from "@/app/components/Footer.client";
import Image from 'next/image';
import image from '/public/homepage_banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';
import styles from '/src/app/components/Home.module.css';
import { useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const handleGetQuotedClick = () => {
        router.push('/quotes');
    };

    const handleCardClick = () => {
        router.push('/about');
    }

    return (
        <RootLayout>
            <NavbarClient/>
            <div className={styles.container}>
                <Image
                    src={image}
                    alt="Dnipro Electric Inc."
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className={styles.overlay}>
                    <div className={styles.textSection}>
                        <h1 className={styles.h1}>Powering your Future</h1>
                        <h2>Dnipro Electric Inc.</h2>
                        <button
                            className={styles.getQuoteButton}
                            onClick={handleGetQuotedClick}
                        >
                            Get Quoted
                        </button>
                    </div>
                    <div
                        className={styles.cardsContainer}
                        onClick={handleCardClick}
                    >
                        <div className={styles.card}>
                            <FontAwesomeIcon icon={faHome} size="3x"/>
                            <div>
                                <h3 className={styles.h3}>Residential Services</h3>
                                <p>Our experienced and certified electricians specialize in a wide range of residential
                                    services, from simple repairs and installations to complete home rewiring and
                                    electrical
                                    panel upgrades.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <FontAwesomeIcon icon={faBuilding} size="3x"/>
                            <div>
                                <h3 className={styles.h3}>Commercial Services</h3>
                                <p>Our commercial services include electrical system design, installation, maintenance,
                                    and emergency repairs. We are committed to minimizing downtime and ensuring that
                                    your
                                    electrical systems are running smoothly and efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterClient/>
        </RootLayout>
    );
}