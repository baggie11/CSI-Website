"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Get current page from pathname
  const getCurrentPage = () => {
    if (pathname === '/') return 'home';
    if (pathname === '/home') return 'home';
    if (pathname === '/info') return 'info';
    if (pathname === '/team') return 'team';
    if (pathname === '/contact') return 'contact';
    return 'home'; // default
  };

  const currentPage = getCurrentPage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>CSI Website</title>
        <meta name="description" content="CSI Website for SSN College Of Engineering" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
          {/* Streamlined Navigation Bar */}
          <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2" style={{ borderColor: '#00A9E0' }}>
            <div className="container mx-auto px-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-between py-4">
                {/* Logo and Title */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/csilogo_new.png"
                      alt="CSI Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                  <Link 
                    href="/" 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'home' 
                        ? 'text-white font-semibold shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={currentPage === 'home' ? { 
                      background: 'linear-gradient(135deg, #005191, #00A9E0)',
                    } : { color: '#005191' }}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/info" 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'info' 
                        ? 'text-white font-semibold shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={currentPage === 'info' ? { 
                      background: 'linear-gradient(135deg, #005191, #00A9E0)',
                    } : { color: '#005191' }}
                  >
                    Info
                  </Link>
                  <Link 
                    href="/team" 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'team' 
                        ? 'text-white font-semibold shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={currentPage === 'team' ? { 
                      background: 'linear-gradient(135deg, #005191, #00A9E0)',
                    } : { color: '#005191' }}
                  >
                    Team
                  </Link>
                  <Link 
                    href="/contact" 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'contact' 
                        ? 'text-white font-semibold shadow-md' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={currentPage === 'contact' ? { 
                      background: 'linear-gradient(135deg, #005191, #00A9E0)',
                    } : { color: '#005191' }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <div className="flex items-center justify-between py-3">
                  {/* Mobile Logo and Title */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/csilogo_new.png"
                        alt="CSI Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg transition-all duration-300"
                    style={{ color: '#005191' }}
                    aria-label="Toggle menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                  <div className="pb-4 border-t border-gray-200">
                    <div className="flex flex-col space-y-2 pt-4">
                      <Link 
                        href="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                          currentPage === 'home' 
                            ? 'text-white font-semibold shadow-md' 
                            : 'hover:bg-gray-100'
                        }`}
                        style={currentPage === 'home' ? { 
                          background: 'linear-gradient(135deg, #005191, #00A9E0)',
                        } : { color: '#005191' }}
                      >
                        Home
                      </Link>
                      <Link 
                        href="/info" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                          currentPage === 'info' 
                            ? 'text-white font-semibold shadow-md' 
                            : 'hover:bg-gray-100'
                        }`}
                        style={currentPage === 'info' ? { 
                          background: 'linear-gradient(135deg, #005191, #00A9E0)',
                        } : { color: '#005191' }}
                      >
                        Info
                      </Link>
                      <Link 
                        href="/team" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                          currentPage === 'team' 
                            ? 'text-white font-semibold shadow-md' 
                            : 'hover:bg-gray-100'
                        }`}
                        style={currentPage === 'team' ? { 
                          background: 'linear-gradient(135deg, #005191, #00A9E0)',
                        } : { color: '#005191' }}
                      >
                        Team
                      </Link>
                      <Link 
                        href="/contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                          currentPage === 'contact' 
                            ? 'text-white font-semibold shadow-md' 
                            : 'hover:bg-gray-100'
                        }`}
                        style={currentPage === 'contact' ? { 
                          background: 'linear-gradient(135deg, #005191, #00A9E0)',
                        } : { color: '#005191' }}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="text-white py-8 mt-12" style={{ backgroundColor: '#2D2D2D' }}>
            <div className="container mx-auto px-4 text-center">
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mb-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/csi_ssn?igsh=MTE2MXlqMXA2c2ZoaA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Visit our Instagram"
                >
                  <svg className="w-5 h-5" style={{ color: '#E1306C' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Visit our LinkedIn"
                >
                  <svg className="w-5 h-5" style={{ color: '#0077B5' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="flex justify-center items-center mb-4">
                <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden">
                  <Image
                    src="/csilogo_new.png"
                    alt="CSI Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold">CSI SSN Student Chapter</h3>
              </div>
              
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}