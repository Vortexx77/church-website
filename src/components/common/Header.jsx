import React, { useState } from 'react';
import { Home, Info, Users, BookOpen, Calendar, Mail, Heart, Menu, X, Facebook, Twitter, Instagram, Search, MapPin, LogIn } from 'lucide-react';

/**
 * Header Component
 * This component is responsible for the entire navigation area of the site,
 * including the top bar with social links and the main responsive navigation.
 */
const Header = () => {
  // State to manage the mobile menu's open/closed status.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // An array of navigation link objects for easy mapping.
  const navLinks = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#', icon: Info },
    { name: 'Ministries', href: '#', icon: Users },
    { name: 'Sermons', href: '#', icon: BookOpen },
    { name: 'Events', href: '#', icon: Calendar },
    { name: 'Contact', href: '#', icon: Mail },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#1f1f1f] text-white/90 text-xs">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center space-x-5">
              <button className="flex items-center space-x-1 hover:text-white transition-colors">
                <Search size={14} />
                <span>Search</span>
              </button>
              <a href="#times" className="flex items-center space-x-1 hover:text-white transition-colors">
                <MapPin size={14} />
                <span>Times & Directions</span>
              </a>
              <a href="#login" className="flex items-center space-x-1 hover:text-white transition-colors">
                <LogIn size={14} />
                <span>Members Login</span>
              </a>
              <a href="#give" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Heart size={14} />
                <span>Give</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center bg-white">
        <div className="text-xl font-extrabold tracking-widest text-gray-900">
          KAMPALA <span className="text-[#C9A87C]">COMMUNITY</span> CHURCH
        </div>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative uppercase tracking-wide text-[13px] font-semibold text-gray-600 hover:text-gray-900">
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-[#C9A87C] opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}

        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 font-medium transition-colors p-2 rounded-md hover:bg-gray-50">
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2 border-t">
              <a href="#" className="text-gray-700 hover:text-gray-900"><Facebook size={18} /></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><Twitter size={18} /></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
