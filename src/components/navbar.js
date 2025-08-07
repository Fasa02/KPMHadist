// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // untuk akses global style jika ada

export default function Navbar() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    { label: 'MBG', to: '/mbg' },
    { label: 'Articles', to: '/articles' }
  ];

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
      <div className="container d-flex justify-content-center">
        {/* Toggle button (hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center gap-lg-5 text-center">
            {/* Kiri */}
            {items.slice(0, 2).map(item => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end
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

            {/* Logo tengah */}
            <li className="nav-item my-2 my-lg-0">
              <NavLink to="/">
                <img src="/images/logo.svg" alt="KPM HADIST" height="40" />
              </NavLink>
            </li>

            {/* Kanan */}
            {items.slice(2).map(item => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
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
