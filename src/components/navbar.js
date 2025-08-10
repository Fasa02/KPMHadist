// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    { label: 'MBG', to: '/mbg' },
    { label: 'Articles', to: '/articles' }
  ];

  const [open, setOpen] = useState(false); // collapse state
  const collapseRef = useRef(null);
  const location = useLocation();

  // Close menu whenever route changes (when user navigates)
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu if window resized to desktop size (so it doesn't stay open)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close when clicking outside the collapse area (useful on mobile)
  useEffect(() => {
    function handleDocClick(e) {
      if (!open) return;
      const clickedInside = collapseRef.current && collapseRef.current.contains(e.target);
      const clickedToggler = e.target.closest('.navbar-toggler');
      if (!clickedInside && !clickedToggler) setOpen(false);
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, [open]);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        height: '80px'
      }}
    >
      <div className="container d-flex justify-content-end" style={{ position: 'relative' }}>
        {/* Toggle button (hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu - controlled by React state */}
        <div
          ref={collapseRef}
          className={`collapse navbar-collapse justify-content-center ${open ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-center gap-lg-5 text-center">
            {items.slice(0, 2).map(item => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    'nav-link' +
                    (isActive
                      ? ' fw-bold border-bottom border-3 border-success'
                      : ' fw-normal border-bottom border-0')
                  }
                  style={{ paddingBottom: '4px' }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="nav-item my-2 my-lg-0">
              <NavLink to="/" onClick={() => setOpen(false)}>
                <img src="/images/logo.svg" alt="KPM HADIST" height="40" />
              </NavLink>
            </li>

            {items.slice(2).map(item => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    'nav-link' +
                    (isActive
                      ? ' fw-bold border-bottom border-3 border-success'
                      : ' fw-normal border-bottom border-0')
                  }
                  style={{ paddingBottom: '4px' }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
