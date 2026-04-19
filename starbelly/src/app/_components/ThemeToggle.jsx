"use client";
import { useEffect, useState } from 'react';

const MorningDeer = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sun */}
    <circle cx="21" cy="7" r="3" fill="#FFD700" opacity="0.9"/>
    <line x1="21" y1="3" x2="21" y2="1.5" stroke="#FFD700" strokeWidth="1" strokeLinecap="round"/>
    <line x1="24.1" y1="4.9" x2="25.1" y2="3.9" stroke="#FFD700" strokeWidth="1" strokeLinecap="round"/>
    <line x1="25" y1="7" x2="26.5" y2="7" stroke="#FFD700" strokeWidth="1" strokeLinecap="round"/>
    {/* Left antler */}
    <path d="M10 10 L7 5 M10 10 L6 8" stroke="#FFF8E7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Right antler */}
    <path d="M13 10 L16 5 M13 10 L17 8" stroke="#FFF8E7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Head */}
    <ellipse cx="11.5" cy="12" rx="2.2" ry="1.8" fill="#FFF8E7"/>
    {/* Nose */}
    <circle cx="10.4" cy="13.1" r="0.6" fill="#d4a869" opacity="0.8"/>
    {/* Eye */}
    <circle cx="12" cy="11.3" r="0.5" fill="#3F4F2A"/>
    {/* Body */}
    <ellipse cx="12" cy="18.5" rx="4.5" ry="3" fill="#FFF8E7"/>
    {/* Legs */}
    <line x1="9" y1="21" x2="8" y2="27" stroke="#FFF8E7" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="11" y1="21.5" x2="10.5" y2="27" stroke="#FFF8E7" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="13.5" y1="21.5" x2="13.5" y2="27" stroke="#FFF8E7" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="15.5" y1="21" x2="16.5" y2="27" stroke="#FFF8E7" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Tail */}
    <circle cx="16.3" cy="17" r="1" fill="white" opacity="0.9"/>
  </svg>
);

const NightDeer = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Moon */}
    <path d="M22 4 A5 5 0 1 1 22 14 A3.5 3.5 0 1 0 22 4" fill="#FEB600"/>
    {/* Stars */}
    <circle cx="5" cy="4" r="0.8" fill="#FEB600" opacity="0.7"/>
    <circle cx="18" cy="2" r="0.6" fill="#FEB600" opacity="0.5"/>
    <circle cx="3" cy="9" r="0.5" fill="#FEB600" opacity="0.6"/>
    {/* Glow under deer */}
    <ellipse cx="12" cy="24" rx="6" ry="1.5" fill="#FEB600" opacity="0.12"/>
    {/* Left antler */}
    <path d="M10 10 L7 5 M10 10 L6 8" stroke="#FEB600" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Right antler */}
    <path d="M13 10 L16 5 M13 10 L17 8" stroke="#FEB600" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Head */}
    <ellipse cx="11.5" cy="12" rx="2.2" ry="1.8" fill="#FEB600"/>
    {/* Glowing eye */}
    <circle cx="12" cy="11.3" r="0.7" fill="white" opacity="0.95"/>
    <circle cx="12" cy="11.3" r="0.35" fill="#FEB600"/>
    {/* Body */}
    <ellipse cx="12" cy="18.5" rx="4.5" ry="3" fill="#FEB600" opacity="0.9"/>
    {/* Legs */}
    <line x1="9" y1="21" x2="8" y2="27" stroke="#FEB600" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="11" y1="21.5" x2="10.5" y2="27" stroke="#FEB600" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="13.5" y1="21.5" x2="13.5" y2="27" stroke="#FEB600" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="15.5" y1="21" x2="16.5" y2="27" stroke="#FEB600" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Tail white dot */}
    <circle cx="16.3" cy="17" r="1" fill="white" opacity="0.8"/>
  </svg>
);

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('kasturi_theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('kasturi_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('kasturi_theme', 'light');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      title={dark ? 'Switch to day mode' : 'Switch to night mode'}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9000,
        width: '54px',
        height: '54px',
        borderRadius: '50%',
        border: '2px solid #FEB600',
        background: dark
          ? 'linear-gradient(145deg, #0a1a0a 0%, #0f2a1f 100%)'
          : 'linear-gradient(145deg, #2d5a27 0%, #3d6b38 100%)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        boxShadow: dark
          ? '0 0 18px rgba(254,182,0,0.35), 0 4px 12px rgba(0,0,0,0.5)'
          : '0 2px 12px rgba(0,0,0,0.35)',
        transition: 'all 0.4s ease',
        outline: 'none',
      }}
    >
      {dark ? <NightDeer /> : <MorningDeer />}
    </button>
  );
};

export default ThemeToggle;
