import RootLayout from "@/app/layout";
import {Navbar} from "react-bootstrap";
import NavbarClient from "@/app/components/Navbar.client";

export default function About() {
    return (
        <RootLayout>
            <NavbarClient />
            <div>
                <h1>About</h1>
                <p>Some information about the company</p>
            </div>
        </RootLayout>
    );
}