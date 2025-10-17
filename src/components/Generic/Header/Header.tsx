'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ButtonComponent from '@/components/Core/ButtonComponent';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import './header.scss';
import Link from 'next/link';

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <header className="header-section">
            <div className="container">
                <div className="header-wrapper">
                    <Navbar expand="lg" className='navbar' sticky="top">
                        <Navbar.Brand href="/">
                            <Image src={"/images/dacode-logo.png"} alt="DaCode Logo" width={200} height={24} loading='lazy'  />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-menu" onClick={toggleMobileMenu}>
                            <GiHamburgerMenu className='menu-icon' />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbar-menu">
                            <Nav className="navbar-wrapper ms-auto">
                                <NavItem className='navbar-item'>
                                    <Link href="/" className='navbar-link'>Home</Link>
                                </NavItem>
                                <NavItem className='navbar-item'>
                                    <Link href="/services" className='navbar-link'>Services</Link>
                                </NavItem>
                                <NavItem className='navbar-item'>
                                    <Link href="/case" className='navbar-link'>Case</Link>
                                </NavItem>
                                <NavItem className='navbar-item'>
                                    <Link href="/specialists" className='navbar-link'>DaCode Specialists</Link>
                                </NavItem>
                                <NavItem className='navbar-item'>
                                    <Link href="/blog" className='navbar-link'>Blog</Link>
                                </NavItem>
                                <NavItem className='navbar-item btn-wrapper'>
                                    <ButtonComponent label="Request a Quote" role="link" variant="secondary" />
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    );
};

export default Header;