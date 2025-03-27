'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaTelegram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-500">Dev</span> Consultancy
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in wealth management and investments. We provide expert financial consultation
              to help you achieve your financial goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/market-insights" className="text-gray-400 hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/investment" className="text-gray-400 hover:text-white transition-colors">
                  Investment Planning
                </Link>
              </li>
              <li>
                <Link href="/services/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/services/trading" className="text-gray-400 hover:text-white transition-colors">
                  Trading Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/tax" className="text-gray-400 hover:text-white transition-colors">
                  Tax & Wealth Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-gray-400 hover:text-white transition-colors">
                  Stock Market Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-yellow-500" />
                <a href="tel:+918655364812" className="text-gray-400 hover:text-white transition-colors">
                  +91 8655364812
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-yellow-500" />
                <a href="mailto:devdave_2012@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  devdave2012@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-500" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=2HW2%2B8R2%2C+Memnagar+Rd%2C+Sarvottam+Nagar+Society%2C+Navrangpura%2C+Ahmedabad%2C+Gujarat+380014%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  2HW2+8R2, Memnagar Rd,<br />
                  Sarvottam Nagar Society,<br />
                  Navrangpura, Ahmedabad,<br />
                  Gujarat 380014, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTelegram size={24} />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Dev Consultancy. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 