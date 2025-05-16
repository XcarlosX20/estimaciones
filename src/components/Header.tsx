'use client'
import { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-500 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            <Image src="/logo-pnfi.jpg" alt="Logo" width={100} height={100} />
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200">
              Inicio
            </Link>
            <Link href="/confidence-interval" className="text-white hover:text-gray-200">
              Calculadora IC
            </Link>
          </nav>

          {/* Hamburger Menu Button - only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header; 