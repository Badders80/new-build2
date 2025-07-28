import React from 'react';
import heroBg from '../assets/hero-horses.png';
import goldLogo from '../assets/gold-logo.svg';

/**
 * Full‑screen hero section with a darkened background image and
 * centred gold logo. There is no additional text here; the logo
 * alone anchors the page.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Logo */}
      <div className="relative z-10 text-center">
        <img src={goldLogo} alt="Evolution Stables" className="w-56 h-auto mx-auto" />
      </div>
    </section>
  );
}
