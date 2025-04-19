// components/Header/index.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
    { path: "/", label: "Home" },
    { path: "/category", label: "Category" },
    { path: "/cart", label: "Cart" },
    { path: "/contact", label: "Contact" },
    { path: "/login", label: "Login" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar 
            bg="light" 
            variant="light" 
            expand="lg" 
            sticky="top"
            className={scrolled ? 'scrolled' : ''}
        >
            <Container>
                {/* Brand logo */}
                <Navbar.Brand as={Link} to="/" className="mx-auto mx-lg-0">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        width="160"
                        height="45"
                        className="d-inline-block align-top header-logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" className="justify-content-center">
                    <Nav>
                        {NAV_ITEMS.map((item, index) => (
                            <Nav.Link
                                key={item.path}
                                as={Link}
                                to={item.path}
                                className="mx-2 mx-lg-3"
                                style={{ '--index': index }}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;