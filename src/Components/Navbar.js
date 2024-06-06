import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <link rel="stylesheet" href="Navbar.css" />
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
            <script src="NavbarScript.js" defer></script>

            <nav className="nav">
                <a href="#" className="logo">Book My Show</a>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SignUp">Sign Up</Link></li>
                </ul>
            </nav>
        </>
    )
}