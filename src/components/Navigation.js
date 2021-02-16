// This file is exported to --->  src/App.js
// React required
import React from "react";
import { Link } from "react-router-dom"; 
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Navigation.css";
// -------------- Application Begins Bellow ------------ //

// Main function
export default function Navigation() {

    // Important variables
    const { isAuthenticated, userHasAuthenticated } = useAppContext();

    // Handling Logout
    async function handleLogout() {

        // Setting userHasAuthenticated to false in useAppContext
        userHasAuthenticated(false);

        // Redirect to Login
        window.location.href = '/login';

    }


    // Return UI
    return ( 
        <>


            {/* Navigation - Start */}
            <nav id="Navigation" className="navbar navbar-expand-lg navbar-dark bg-white">

                {/* Brand - Start */}
                <Link className="navbar-brand p-0 text-dark" to="/">Northside</Link>
                {/* Brand - Ebd */}

                { /* Toggler/collapsibe Button - Start */}
                <button className="navbar-toggler text-dark border" type="button" data-toggle="collapse" data-target="#collapsibleNavbar1">
                    <i className='fa fa-server' role="img" aria-label="menu"></i>
                </button>
                { /* Toggler/collapsibe Button - End */}

                {/* Navbar links - Start */}
                    
                { /* Other Links - Start */}
                <AppliedLinks/>
                { /* Other Links - End */}

                <ul className="navbar-nav">
                    <AuthenticatedLinks handleLogout={handleLogout} />
                    <UnauthenticatedLinks/> 
                </ul>

            </nav> 
            {/* Navigation - End */}

            {/* Banner - Start */}
            <section className="p-2 text-center bg-dark text-white" >
                <span>Call attention to your users <i className="fa fa-umbrella"></i> | Last Day: Free shipping <i className="fa fa-bookmark"></i> </span>
            </section>
            {/* Banner - End */}

        </> 
 
        );
}

// Links for both public and logged in users
function AppliedLinks() {
    return (
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar1">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/men">MEN</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/women">WOMEN</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/kids">KIDS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/jeans">JEANS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/shorts">SHORTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/filter/bags">BAGS</Link>
                </li>
            </ul>
        </div>
        );
}

// Links for logged in users
function AuthenticatedLinks({ handleLogout }) {
    return (
        <>  

            <li className="nav-item">
                <Link className="nav-link" to="/postnew">
                    + Add Item
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                    <i className="fa fa-cog fa-spin"></i> Dashboard
                </Link>
            </li> 
                
            { /* Logout - Start */}
            <li className="nav-item dropdown" style={{ cursor: "pointer" }}>
                <span
                    className="nav-link"
                    onClick={handleLogout}
                > <i className="fa fa-sign-out"></i> Logout</span>
            </li>
            { /* Logout - End */} 

        </>
        );
}

// Links for public users
function UnauthenticatedLinks() {
    return (
        <>
            { /* Register - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
            </li>
            { /* Register - End */}

            { /* Sign In - Start */}
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    <i className="fa fa-sign-in"></i> Login
                </Link>
            </li>
            { /* Sign In - End */}

        </>
        );
}