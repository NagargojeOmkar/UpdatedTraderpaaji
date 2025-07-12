// src/components/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const servicesMenu = [
    { name: 'Intraday Premium', path: '/intraday' },
    { name: 'Options Swing', path: '/swing' },
    { name: 'Equity Premium', path: '/equity' },
    { name: 'All-In-One Combo', path: '/combo' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research Services', path: null, subLinks: servicesMenu },
    { name: 'Complaint Board', path: '/complaints' },
    { name: 'Investor Charter', path: '/charter' },
    { name: 'Disclosure', path: '/disclosure' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
    setOpenDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav 
      ref={navRef}
      className="bg-white text-gray-800 sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <img 
                src={logo} 
                alt="TraderPaaji Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="text-blue-700 font-bold text-xl">
                Trader<span className="text-yellow-500">Paaji</span>
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((item) => (
                <div key={item.name} className="relative">
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 font-semibold'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 ${
                          openDropdown === item.name
                            ? 'bg-blue-100 text-blue-700 font-semibold'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="ml-1 text-xs" />
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 z-50"
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <div className="py-1">
                              {item.subLinks.map((subItem) => (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={({ isActive }) =>
                                    `block px-4 py-2 text-sm transition ${
                                      isActive
                                        ? 'bg-blue-100 text-blue-700 font-medium'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                                    }`
                                  }
                                >
                                  {subItem.name}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none transition"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navLinks.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-md text-base font-medium ${
                          isActive
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium ${
                          openDropdown === item.name
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="text-xs" />
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 bg-blue-50 rounded-lg ml-3 my-1 overflow-hidden"
                          >
                            {item.subLinks.map((subItem) => (
                              <NavLink
                                key={subItem.name}
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-3 py-2.5 rounded-md text-base ${
                                    isActive
                                      ? 'bg-blue-100 text-blue-700 font-medium'
                                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                  }`
                                }
                                onClick={closeMenu}
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;