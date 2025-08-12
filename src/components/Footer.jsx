import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import data from '../data/navigation.json';

const isExternal = (href = '') => /^https?:\/\//i.test(href);

const Footer = () => {
  const navItems = data?.navItems || [];
  // actions can be an object like { donate: {...}, petition: {...} } or an array
  const actionsArray = Array.isArray(data?.actions)
    ? data.actions
    : data?.actions
    ? Object.values(data.actions)
    : [];

  return (
    <footer className="bg-navy text-white py-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xl">SOF</span>
              </div>
              <div>
                <span className="text-xl font-bold font-display">The School of Freedom</span>
                <p className="text-sm text-gray-300">Education is Her Freedom</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Afghan girls and refugee youth through education, mentorship, and leadership development.
            </p>
            <div className="quote-card bg-gold text-navy p-4 rounded-lg">
              <p className="font-medium italic">"When you educate a girl, you change the world."</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {isExternal(item.path) ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path || '/'}
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Get Involved</span>
            <ul className="space-y-2">
              {actionsArray.map((item, idx) => (
                <li key={idx}>
                  {isExternal(item.href) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="text-gray-300 hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail size={16} className="text-gold" />
              <span className="text-gray-300">admin@schooloffreedom.org</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={16} className="text-gold" />
              <span className="text-gray-300">+1 (916) 844-5480</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin size={16} className="text-gold" />
              <span className="text-gray-300">Sacramento, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>© 2025 The School of Freedom. Made with</span>
            <Heart size={16} className="text-gold" />
            <span>for education and freedom.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
