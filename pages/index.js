import RootLayout from "@/app/layout";
import NavbarClient from "@/app/components/Navbar.client";

export default function Home() {
    return (
        <RootLayout>
            <NavbarClient />
            <div>
                <h1>Home</h1>
                <p>Some information about the company</p>
            </div>
        </RootLayout>
    );
}