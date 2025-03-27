'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBalanceScale, FaBriefcase, FaCalculator, FaGraduationCap } from 'react-icons/fa';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Investment Planning',
      icon: <FaChartLine size={48} className="text-blue-700 group-hover:text-white transition-colors duration-300" />,
      description: 'Our comprehensive investment planning services help you navigate the complexities of stocks, mutual funds, SIPs, and IPOs. We analyze your financial goals, risk tolerance, and time horizon to create a customized investment strategy.',
      features: [
        'Stock Market Investments',
        'Mutual Fund Selection & Analysis',
        'Systematic Investment Plans (SIPs)',
        'IPO Participation Strategy',
        'Asset Allocation'
      ]
    },
    {
      id: 1,
      title: 'Portfolio Management',
      icon: <FaBalanceScale size={48} className="text-blue-700 group-hover:text-white transition-colors duration-300" />,
      description: 'Our portfolio management services are designed to help you build and maintain a diversified investment portfolio. We monitor market trends, rebalance your investments, and optimize your portfolio to maximize returns while managing risk.',
      features: [
        'Portfolio Diversification',
        'Risk Assessment & Management',
        'Performance Monitoring',
        'Regular Portfolio Rebalancing',
        'Quarterly Performance Reports'
      ]
    },
    {
      id: 2,
      title: 'Trading Consultation',
      icon: <FaBriefcase size={48} className="text-blue-700 group-hover:text-white transition-colors duration-300" />,
      description: 'Get expert guidance for your trading activities, whether you prefer intraday, swing, or long-term investing. Our trading consultation services provide you with research-backed trade ideas, technical analysis, and risk management strategies.',
      features: [
        'Intraday Trading Strategies',
        'Swing Trading Recommendations',
        'Long-term Investment Picks',
        'Technical & Fundamental Analysis',
        'Stop-Loss & Risk Management'
      ]
    },
    {
      id: 3,
      title: 'Tax & Wealth Advisory',
      icon: <FaCalculator size={48} className="text-blue-700 group-hover:text-white transition-colors duration-300" />,
      description: 'Our tax and wealth advisory services help you optimize your investment returns through tax-efficient strategies. We work with you to create a comprehensive wealth management plan that aligns with your financial goals.',
      features: [
        'Tax-Efficient Investment Planning',
        'Wealth Creation Strategies',
        'Retirement Planning',
        'Estate & Succession Planning',
        'Financial Goal Setting'
      ]
    },
    {
      id: 4,
      title: 'Stock Market Training',
      icon: <FaGraduationCap size={48} className="text-blue-700 group-hover:text-white transition-colors duration-300" />,
      description: "Learn the fundamentals of stock market investing through our comprehensive training programs. Whether you're a beginner or an intermediate investor, our courses will help you develop the skills needed to make informed investment decisions.",
      features: [
        'Stock Market Basics',
        'Technical Analysis Techniques',
        'Fundamental Analysis Methods',
        'Trading Psychology',
        'Risk Management Principles'
      ]
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive financial services tailored to your unique financial goals and circumstances. 
            Each service is designed with your success in mind.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveTab(service.id)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {service.description.substring(0, 100)}...
              </p>
              <div className="mt-6 flex justify-between items-center">
                <button 
                  className="text-blue-700 group-hover:text-white font-medium transition-colors duration-300"
                  onClick={() => setActiveTab(service.id)}
                >
                  Learn More
                </button>
                <div className={`h-1 w-1 rounded-full ${activeTab === service.id ? 'bg-yellow-500' : 'bg-gray-300'} group-hover:bg-yellow-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details */}
        <motion.div 
          className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={activeTab}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <div className="p-6 bg-blue-700 rounded-lg text-white inline-block mb-4">
                {services[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {services[activeTab].title}
              </h3>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <a href="#contact" className="btn-primary inline-block">Schedule Consultation</a>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {services[activeTab].description}
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Key Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                {services[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-blue-700 h-2 w-2 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 