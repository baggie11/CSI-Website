"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
          {/* Header with integrated Navigation - No gap */}
          <header className="text-white shadow-md" style={{ background: 'linear-gradient(to right, #005191, #00A9E0)' }}>
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <svg className="w-10 h-10" style={{ color: '#005191' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5L20 7l-8 4-8-4 8-4.5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold">CSI Student Chapter</h1>
                </div>
                <p className="text-lg opacity-90">SSN College of Engineering</p>
              </div>
            </div>

            {/* Navigation - Seamlessly integrated with header */}
            <div className="container mx-auto px-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex justify-center pb-4">
                <div className="flex space-x-8">
                  <a 
                    href="/" 
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === 'home' 
                        ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                        : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                    }`}
                    style={currentPage === 'home' ? { 
                      background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                      backdropFilter: 'blur(10px)'
                    } : {}}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'home') {
                        (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                        (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'home') {
                        (e.target as HTMLElement).style.background = '';
                        (e.target as HTMLElement).style.backdropFilter = '';
                      }
                    }}
                  >
                    Home
                  </a>
                  <a 
                    href="/info" 
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === 'info' 
                        ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                        : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                    }`}
                    style={currentPage === 'info' ? { 
                      background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                      backdropFilter: 'blur(10px)'
                    } : {}}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'info') {
                        (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                        (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'info') {
                        (e.target as HTMLElement).style.background = '';
                        (e.target as HTMLElement).style.backdropFilter = '';
                      }
                    }}
                  >
                    Info
                  </a>
                  <a 
                    href="/team" 
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === 'team' 
                        ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                        : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                    }`}
                    style={currentPage === 'team' ? { 
                      background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                      backdropFilter: 'blur(10px)'
                    } : {}}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'team') {
                        (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                        (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'team') {
                        (e.target as HTMLElement).style.background = '';
                        (e.target as HTMLElement).style.backdropFilter = '';
                      }
                    }}
                  >
                    Team
                  </a>
                  <a 
                    href="/contact" 
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      currentPage === 'contact' 
                        ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                        : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                    }`}
                    style={currentPage === 'contact' ? { 
                      background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                      backdropFilter: 'blur(10px)'
                    } : {}}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'contact') {
                        (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                        (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'contact') {
                        (e.target as HTMLElement).style.background = '';
                        (e.target as HTMLElement).style.backdropFilter = '';
                      }
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="md:hidden flex justify-center pb-3">
                <button
                  onClick={toggleMenu}
                  className="px-4 py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 shadow-md backdrop-blur-md border border-white border-opacity-30 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                  }}
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
                <div className="md:hidden pb-4">
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="/" 
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl font-medium text-center transition-all duration-300 ${
                        currentPage === 'home' 
                          ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                          : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                      }`}
                      style={currentPage === 'home' ? { 
                        background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                        backdropFilter: 'blur(10px)'
                      } : {}}
                      onMouseEnter={(e) => {
                        if (currentPage !== 'home') {
                          (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                          (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== 'home') {
                          (e.target as HTMLElement).style.background = '';
                          (e.target as HTMLElement).style.backdropFilter = '';
                        }
                      }}
                    >
                      Home
                    </a>
                    <a 
                      href="/info" 
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl font-medium text-center transition-all duration-300 ${
                        currentPage === 'info' 
                          ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                          : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                      }`}
                      style={currentPage === 'info' ? { 
                        background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                        backdropFilter: 'blur(10px)'
                      } : {}}
                      onMouseEnter={(e) => {
                        if (currentPage !== 'info') {
                          (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                          (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== 'info') {
                          (e.target as HTMLElement).style.background = '';
                          (e.target as HTMLElement).style.backdropFilter = '';
                        }
                      }}
                    >
                      Info
                    </a>
                    <a 
                      href="/team" 
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl font-medium text-center transition-all duration-300 ${
                        currentPage === 'team' 
                          ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                          : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                      }`}
                      style={currentPage === 'team' ? { 
                        background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                        backdropFilter: 'blur(10px)'
                      } : {}}
                      onMouseEnter={(e) => {
                        if (currentPage !== 'team') {
                          (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                          (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== 'team') {
                          (e.target as HTMLElement).style.background = '';
                          (e.target as HTMLElement).style.backdropFilter = '';
                        }
                      }}
                    >
                      Team
                    </a>
                    <a 
                      href="/contact" 
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl font-medium text-center transition-all duration-300 ${
                        currentPage === 'contact' 
                          ? 'text-white font-semibold shadow-lg backdrop-blur-md border border-white border-opacity-30' 
                          : 'text-white hover:backdrop-blur-md hover:shadow-md border border-transparent hover:border-white hover:border-opacity-30'
                      }`}
                      style={currentPage === 'contact' ? { 
                        background: 'linear-gradient(135deg, rgba(0, 81, 145, 0.3), rgba(0, 169, 224, 0.3))',
                        backdropFilter: 'blur(10px)'
                      } : {}}
                      onMouseEnter={(e) => {
                        if (currentPage !== 'contact') {
                          (e.target as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0, 81, 145, 0.2), rgba(0, 169, 224, 0.2))';
                          (e.target as HTMLElement).style.backdropFilter = 'blur(10px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== 'contact') {
                          (e.target as HTMLElement).style.background = '';
                          (e.target as HTMLElement).style.backdropFilter = '';
                        }
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="text-white py-6 mt-12" style={{ backgroundColor: '#2D2D2D' }}>
            <div className="container mx-auto px-4 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#005191' }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.5L20 7l-8 4-8-4 8-4.5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
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