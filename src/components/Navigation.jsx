import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// data-only import
import navData from '../data/navigation.json';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { logo, navItems, actions } = navData;
  const isActive = (path) => location.pathname === path;

  // Always jump to top when the route changes (e.g., back/forward, programmatic nav)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Smooth scroll + (optionally) close mobile menu
  const handleNavClick = (closeMenu = false) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (closeMenu) setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => handleNavClick(false)}
            aria-label="Go to home"
          >
            <img
              src={logo.src} // from /public (absolute path like /images/logo.jpg)
              alt={logo.alt}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-navy font-display">{logo.title}</h1>
              <p className="text-sm text-gray-600">{logo.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems
            .map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(false)}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex space-x-4">
              <a
                href={actions.donate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2"
              >
                {actions.donate.label}
              </a>
              <a
                href={actions.petition.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                {actions.petition.label}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block font-medium transition-colors duration-300 ${
                      isActive(item.path) ? 'text-gold' : 'text-navy hover:text-gold'
                    }`}
                    onClick={() => handleNavClick(true)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href={actions.donate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {actions.donate.label}
                  </a>
                  <a
                    href={actions.petition.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-opacity-90 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {actions.petition.label}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
