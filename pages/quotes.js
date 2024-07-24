import RootLayout from "@/app/layout";
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarClient from "@/app/components/Navbar.client";
import FooterClient from "@/app/components/Footer.client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Quotes() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://formspree.io/f/mzbnnkzd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    router.push('/');
                } else {
                    alert('There was a problem with the submission.');
                }
            })
            .catch(error => {
                alert('There was an error submitting the form.');
            });
    }

    return (
        <RootLayout>
            <NavbarClient />
            <Container className="my-5">
                <Row>
                    <Col md={6} className="mt-5">
                        <h2>Contact Us</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Enter your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Enter a valid email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={3}
                                    placeholder="Your message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="mt-5">
                        <h2>Contact Information</h2>
                        <ul className="list-unstyled">
                            <li>
                                <strong>Call Us</strong><br />
                                1 (234) 567-891, 1 (234) 987-654
                            </li>
                            <li className="mt-3">
                                <strong>Location</strong><br />
                                121 Rock Street, 21 Avenue, New York, NY 92103-9000
                            </li>
                            <li className="mt-3">
                                <strong>Business Hours</strong><br />
                                Mon – Fri: 10 am – 8 pm<br />
                                Sat, Sun: Closed
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <FooterClient />
        </RootLayout>
    );
}
