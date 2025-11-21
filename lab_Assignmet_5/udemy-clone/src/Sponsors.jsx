import React from 'react';
import './Sponsors.css';

import LogoVW from './assets/volkswagen_logo_udemy.svg';
import LogoSamsung from './assets/samsung_logo.svg';
import LogoCisco from './assets/cisco_logo.svg';
import LogoVimeo from './assets/vimeo_logo_resized-2.svg';
import LogoPG from './assets/procter_gamble_logo.svg';
import LogoHPE from './assets/hewlett_packard_enterprise_logo.svg';
import LogoCiti from './assets/citi_logo.svg';
import LogoEricsson from './assets/ericsson_logo.svg';

const CompanyLogos = [
    { src: LogoVW, alt: 'Volkswagen' },
    { src: LogoSamsung, alt: 'Samsung' },
    { src: LogoCisco, alt: 'Cisco' },
    { src: LogoVimeo, alt: 'Vimeo' },
    { src: LogoPG, alt: 'P&G' },
    { src: LogoHPE, alt: 'Hewlett Packard Enterprise' },
    { src: LogoCiti, alt: 'Citi' },
    { src: LogoEricsson, alt: 'Ericsson' },
];

export default function Sponsors() {
    return (
        <section className="trust-section">
            <div className="trust-content">
                <p className="trust-text">
                    Trusted by over 17,000 companies and millions of learners around the world
                </p>
                <div className="logo-container">
                    {/* Map through the array to display each logo */}
                    {CompanyLogos.map((logo, index) => (
                        <div key={index} className="logo-item">
                            <img src={logo.src} alt={`${logo.alt} Logo`} className="company-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
