import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-white text-indigo-700 rounded-full p-1">
            <UserCircleIcon className="w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">HealthEase</span>
        </Link>

        <div className="hidden md:flex gap-6 font-medium text-sm">
          <Link
            to="/"
            className={`transition ${
              pathname === '/' ? 'underline underline-offset-4' : 'hover:underline'
            }`}
          >
            Home
          </Link>
          <Link
            to="/my-appointments"
            className={`transition ${
              pathname === '/my-appointments'
                ? 'underline underline-offset-4'
                : 'hover:underline'
            }`}
          >
            My Appointments
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-indigo-600 space-y-2 font-medium text-sm">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block ${
              pathname === '/' ? 'underline' : 'hover:underline'
            }`}
          >
            Home
          </Link>
          <Link
            to="/my-appointments"
            onClick={() => setMenuOpen(false)}
            className={`block ${
              pathname === '/my-appointments' ? 'underline' : 'hover:underline'
            }`}
          >
            My Appointments
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
