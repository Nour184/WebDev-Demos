// Header.jsx
import React from "react";
import UdemyLogo from './assets/logo-udemy.svg';

// --- CSS STYLES (Acts as Header.css) ---
const styles = `
/* BASE HEADER LAYOUT */
/* === FIX: RESET BROWSER DEFAULTS FOR FULL WIDTH === */
body, html {
    margin: 0;
    padding: 0;
    /* Also set box-sizing for consistent layout calculation */
    box-sizing: border-box; 
}
/* ================================================= */
.header {
    height: 50px;   /* fixed header height */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    border-bottom: 1px solid #e0e0e0;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}


.left-section {
    display: flex;
    align-items: center;
    gap: 16px;
}

/* LOGO AND EXPLORE LINK STYLES */
.udemy-logo-svg {
    height: 30px;
    width: auto;
}

.explore-link {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    display: none;
}
@media (min-width: 1024px) {
    .explore-link {
        display: block;
    }
}
.explore-link:hover {
    color: #A435F0;
}

/* MIDDLE SECTION STYLES */
.middle-section {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin: 0 16px;
}

/* SEARCH BAR STYLES */
.searchBarContainer {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 700px;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 999px;
    transition: border-color 0.2s, box-shadow 0.2s;
}
.searchBarContainer:focus-within {
    border-color: #A435F0;
    box-shadow: 0 0 0 1px #A435F0;
}

.searchBarIcon {
    font-size: 18px;
    color: #6a6f73;
    margin-right: 10px;
}

.searchBarInput {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
    color: #1c1d1f;
}

.searchBarInput::placeholder {
    color: #6a6f73;
    opacity: 1;
}

/* RIGHT SECTION */
.right-section {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
}

.nav-link {
    color: #333;
    text-decoration: none;
    padding: 8px;
    display: none;
}
@media (min-width: 1024px) {
    .nav-link {
        display: block;
    }
}
.nav-link:hover {
    color: #A435F0;
}

.cart-icon {
    padding: 8px;
    font-size: 24px;
    cursor: pointer;
}
@media (min-width: 1024px) {
    .cart-icon {
        display: block;
    }
}

/* BUTTONS */
.btn {
    padding: 8px 16px;
    font-weight: 700;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
}

.btn-login {
    border: 1px solid black;
    color: black;
    background-color: white;
}
.btn-login:hover {
    background-color: #f5f5f5;
}

.btn-signup {
    border: 1px solid #A435F0;
    background-color: #A435F0;
    color: white;
}
.btn-signup:hover {
    background-color: #8710d8;
    border-color: #8710d8;
}

/* MOBILE */
@media (max-width: 1023px) {
    .middle-section {
        display: none;
    }
}
`;


export default function Header() {
    return (
        <>
            <style>{styles}</style>

            <header className="header">
                <div className="left-section">
                    <img src={UdemyLogo} alt="Udemy Logo" className="udemy-logo-svg" />
                    <a href="#" className="explore-link">Explore</a>
                </div>

                <div className="middle-section">
                    <div className="searchBarContainer">
                        <span className="searchBarIcon">🔍</span>
                        <input type="text" placeholder="Search for anything" className="searchBarInput" />
                    </div>
                </div>

                <nav className="right-section">
                    <a href="#" className="nav-link">Plans & Pricing</a>
                    <a href="#" className="nav-link">Udemy Business</a>
                    <a href="#" className="cart-icon nav-link">🛒</a>

                    <button className="btn btn-login">Log In</button>
                    <button className="btn btn-signup">Sign Up</button>
                </nav>
            </header>
        </>
    );
}
