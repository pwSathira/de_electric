import Head from 'next/head';
import NavbarClient from "@/app/components/Navbar.client";
import { metadata } from "@/app/metadata";
import { Inter } from "next/font/google";
import styles from "./RootLayout.module.css";
import Document from "next/document";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
            </Head>
            <div className={styles.layoutContainer}>
                <main className={styles.mainContent}>{children}</main>
            </div>
        </>
    );
}
