import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css';
import RootLayout from "@/app/layout";
import FooterClient from "@/app/components/Footer.client";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}
export default MyApp;