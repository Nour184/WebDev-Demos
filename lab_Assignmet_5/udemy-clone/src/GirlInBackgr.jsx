import React from "react";
import girl from './assets/girl_in_backgr.jpg';
import './GirlInBackgr.css';

export default function GirlInBackgr() {
    return (
        <div className="hero-section">
            <div className="hero-image-container">
                <img 
                    src={girl} 
                    alt="Woman with headphones looking at phone" 
                    className="hero-image" 
                />
            </div>
            <div className="hero-text-overlay">
                <div className="hero-content-box">
                    <h2 className="hero-title">
                        Learn more, spend less — Black Friday Sale from £279.99
                    </h2>
                    <p className="hero-subtitle">
                        Sitewide savings on thousands of courses. Ends Nov 28.
                    </p>
                </div>
            </div>
        </div>
    );
}