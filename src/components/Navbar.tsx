'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Services', href: 'services' },
    { title: 'Why Choose Us', href: 'why-choose-us' },
    { title: 'Testimonials', href: 'testimonials' },
    { title: 'Blog', href: 'blog' },
    { title: 'Contact', href: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-700">
            <span className="text-yellow-500">Dev</span> Consultancy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500 font-medium transition-colors"
            >
              {item.title}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-lg`}>
        <div className="container mx-auto py-4 px-4">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              {item.title}
            </ScrollLink>
          ))}
          <div className="mt-4">
            <button className="btn-primary w-full">Free Consultation</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 