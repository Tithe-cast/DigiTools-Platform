import React, { useState, useEffect } from 'react';

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
      style={{
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        borderBottom: '1px solid #f3f4f6',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">

          {/* ── LOGO: plain text "DigiTools" in purple — exactly like the screenshot ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex-shrink-0 text-[#4F39F6] font-bold text-[22px] tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            DigiTools
          </button>

          {/* ── Center nav links ── */}
          <div className="hidden md:flex items-center gap-[30px]">
            {[
              { l: 'Products',     id: 'products' },
              { l: 'Features',     id: 'steps'    },
              { l: 'Pricing',      id: 'pricing'  },
              { l: 'Testimonials', id: 'home'     },
              { l: 'FAQ',          id: 'home'     },
            ].map(n => (
              <button
                key={n.l}
                onClick={() => scrollTo(n.id)}
                className="text-[#374151] hover:text-[#4F39F6] text-[14px] font-medium transition-colors duration-150 whitespace-nowrap"
              >
                {n.l}
              </button>
            ))}
          </div>

          {/* ── Right: cart icon + Login + Get Started ── */}
          <div className="flex items-center gap-[16px]">

            {/* Cart icon — outline style like screenshot */}
            <button
              onClick={() => scrollTo('products')}
              className="relative p-1 text-[#374151] hover:text-[#4F39F6] transition-colors"
              aria-label="Cart"
            >
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-[#4F39F6] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-[3px] leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login text */}
            <button className="hidden md:block text-[#374151] hover:text-[#4F39F6] text-[14px] font-medium transition-colors whitespace-nowrap">
              Login
            </button>

            {/* Get Started — solid purple pill */}
            <button className="bg-[#4F39F6] hover:bg-[#3d2ad4] text-white text-[14px] font-semibold px-[22px] py-[9px] rounded-full transition-colors duration-200 whitespace-nowrap shadow-sm">
              Get Started
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1 text-[#374151] hover:text-[#4F39F6]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-col bg-white">
            {['Products','Features','Pricing','Testimonials','FAQ'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo('products')}
                className="text-left py-2.5 px-1 text-[14px] font-medium text-[#374151] hover:text-[#4F39F6] transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="pt-3 mt-1 border-t border-gray-100 flex items-center gap-3">
              <button className="text-[14px] font-medium text-[#374151]">Login</button>
              <button className="bg-[#4F39F6] text-white text-[13px] font-semibold px-5 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
