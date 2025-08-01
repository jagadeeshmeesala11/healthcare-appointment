import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="bg-teal-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
       
        <Link to="/" className="flex items-center space-x-2">
          <UserCircleIcon className="w-7 h-7 text-white" />
          <span className="text-xl font-bold tracking-wide">JD</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:underline ${
              pathname === '/' ? 'underline font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/my-appointments"
            className={`hover:underline ${
              pathname === '/my-appointments' ? 'underline font-semibold' : ''
            }`}
          >
            My Appointments
          </Link>
        </div>

      
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-teal-500">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block ${
              pathname === '/' ? 'font-semibold underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/my-appointments"
            onClick={() => setMenuOpen(false)}
            className={`block ${
              pathname === '/my-appointments' ? 'font-semibold underline' : ''
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
