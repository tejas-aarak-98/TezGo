import './Navbar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onAction }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const nav = [
    ['Ride', '#rides'],
    ['Track', '#tracking'],
    ['Drive', '#driver'],
    ['Business', '#business'],
    ['Safety', '#safety'],
    ['Help', '#help'],
  ];
  return (
    <header id="main-header" className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <a href="#home" aria-label="TEZGO home">
          TEZ<span>GO</span>
        </a>
        <small>by Tejas Aarak</small>
      </div>
      <nav id="main-nav" className={mobileOpen ? 'mobile-open' : ''}>
        {nav.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button>
          <Link className="login-btn" to="/login">
            Log in
          </Link>
        </button>
        <button className="signup-btn" onClick={() => onAction('signup')}>
          Sign up
        </button>
      </div>
      <button
        className="mobile-menu"
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        ☰
      </button>
    </header>
  );
}
