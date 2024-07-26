import RootLayout from "@/app/layout";
import NavbarClient from "@/app/components/Navbar.client";
import FooterClient from "@/app/components/Footer.client";
import { useEffect, useState } from "react";
import styles from '/src/app/components/Gallery.module.css';
import Image from 'next/image';
import Modal from 'react-modal';
import {Button} from "react-bootstrap";

export default function Gallery() {
    if (typeof window !== 'undefined') {
        Modal.setAppElement('#__next');
    }
    const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch images from the API
        fetch('/api/images')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const openModal = (index) => {
        setCurrentIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <RootLayout>
            <NavbarClient />
            <div className={`container-fluid p-0 ${styles.galleryContainer}`}>
                <div className={styles.gallery}>
                    {images.map((url, index) => (
                        <div className={styles.galleryItem} key={index} onClick={() => openModal(index)}>
                            <Image src={url} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
                        </div>
                    ))}
                </div>
            </div>
            <FooterClient />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <Button size="lg" color="danger" variant="ghost" onClick={closeModal} className={styles.closeButton}> Close [X] </Button>
                <Button size="lg" color="primary" variant="ghost" onClick={prevImage} className={styles.prevButton}> ← Previous </Button>
                <div className={styles.modalContent}>
                    {images.length > 0 && (
                        <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} layout="fill" objectFit="contain" />
                    )}
                </div>
                <Button size="lg" color="primary" variant="ghost" onClick={nextImage} className={styles.nextButton}> Next → </Button>
            </Modal>
        </RootLayout>
    );
}
