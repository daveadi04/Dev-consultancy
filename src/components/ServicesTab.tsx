'use client';

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type TabContent = {
  title: string;
  content: string[];
  email: string;
  phone: string;
  location: string;
  accountLink?: string;
  motto?: string;
};

type TabsType = {
  [key: string]: TabContent;
};

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState<keyof TabsType>('motilal');

  const tabs: TabsType = {
    motilal: {
      title: 'Motilal Oswal',
      content: [
        "Authorised Sub-Broker – Trusted and SEBI-registered for secure investments.",
        "Regulatory Compliance – Registered with SEBI (INZ0001588) and CDSL/NSDL (IN-DP-16-2015).",
        "Motilal Oswal Financial Services Ltd. (MOFSL) – A leading financial services firm.",
        "'Buy Right, Sit Tight' – Long-term wealth creation through strategic investments.",
        "'Think Equity, Think Motilal' – Expertise in equity markets and investment solutions.",
        "Wealth Creation Study – Respected annual research on market trends and strategies.",
        "Portfolio Management Service (PMS) – Expert-managed investments for high-net-worth individuals.",
        "Alternate Investment Fund (AIF) – Specialized investment solutions beyond traditional markets.",
        "Model Portfolio – Professionally curated portfolios for optimized wealth growth.",
        "Mutual Funds – Diverse investment options across asset classes for all investors.",
        "Private Equity – Strategic investments in high-potential startups and enterprises."
      ],
      email: 'devdave_2012@gmail.com',
      phone: '+91 8655364812',
      location: '2HW2+8R2, Memnagar Rd, Sarvottam Nagar Society, Navrangpura, Ahmedabad, Gujarat 380014, India',
      accountLink: 'http://mosl.co/UzC4TcbJJu',
      motto: 'MAKING MONEY AND CREATING WEALTH IS DIFFERENT'
    },
    njindia: {
      title: 'NJ India',
      content: [
       "Trusted Mutual Fund Distributor – Providing expert investment solutions.",
    "Seamless Mutual Fund Investments – Easy and hassle-free process.",
    "Convenient Application Process – Invest online or via offline mode.",
    "Flexible Investment Options – SIP and Lumpsum tailored to your needs.",
    "Smart Retirement Planning – Secure your future with SIP before retirement.",
    "Post-Retirement Financial Stability – Enjoy steady income with SWP (Systematic Withdrawal Plan)."
      ],
      email: 'devdave_2012@gmail.com',
      phone: '+91 8655364812',
      location: '2HW2+8R2, Memnagar Rd, Sarvottam Nagar Society, Navrangpura, Ahmedabad, Gujarat 380014, India',
      motto: 'LUMPSUM SIP SAHI HAI PER SEVA Investment BHI JARURI HAI'
    },
    angel: {
      title: 'Angel One Ltd',
      content: [
       "Easy Trading",
    "Quick Account",
    "Smart Platform",
    "Seamless SIP",
    "Wealth Growth",
    "Mutual Funds",
    "Secure Insurance",
    "Equity Trading"
      ],
      email: 'devdave_2012@gmail.com',
      phone: '+91 8655364812',
      location: '2HW2+8R2, Memnagar Rd, Sarvottam Nagar Society, Navrangpura, Ahmedabad, Gujarat 380014, India',
      accountLink: 'https://angel-one.onelink.me/Wjgr/0eoe4gto'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            {Object.entries(tabs).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof TabsType)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-600">
              {tabs[activeTab].title}
            </h3>

            <div className="space-y-4">
              {tabs[activeTab].content.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {tabs[activeTab].motto && (
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700">
                <p className="font-semibold">{tabs[activeTab].motto}</p>
              </div>
            )}

            {tabs[activeTab].accountLink && (
              <div className="mt-6">
                <a
                  href={tabs[activeTab].accountLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Open Account
                </a>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-600" />
                  <a href={`tel:${tabs[activeTab].phone}`} className="text-blue-600 hover:underline">
                    {tabs[activeTab].phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-600" />
                  <a href={`mailto:${tabs[activeTab].email}`} className="text-blue-600 hover:underline">
                    {tabs[activeTab].email}
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <FaMapMarkerAlt className="text-gray-600 mt-1" />
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tabs[activeTab].location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {tabs[activeTab].location}
                  </a>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-400">
                    <FaTwitter size={24} />
                  </a>
                  <a 
                    href={`https://wa.me/${tabs[activeTab].phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTab; 