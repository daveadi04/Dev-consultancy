'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="bg-blue-700 absolute -top-4 -left-4 h-full w-full rounded-xl"></div>
              <div className="relative z-10 rounded-xl shadow-xl w-full h-[500px] overflow-hidden">
                <Image 
                  src="/images/Devdave.jpg" 
                  alt="Dev Dave with Team Member" 
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-lg p-5 rounded-lg z-20">
                <div className="text-sm text-gray-600 dark:text-gray-300">Combined Experience</div>
                <div className="text-3xl font-bold text-blue-700">25+ Years</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">in Financial Markets</div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-2 text-blue-700">About Us</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            
            <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Meet Dev Dave, Your Financial Consultant</h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With over a decade of experience in financial markets, 
              Dev Dave has established himself as a trusted consultant in the investment sector. 
              His deep understanding of Indian markets, particularly equity and commodity trading, has helped numerous 
              clients achieve their financial objectives and secure their future.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Mission</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Dev Consultancy, we are committed to providing personalized financial solutions that 
                help our clients build and protect their wealth. We believe in transparent, ethical 
                advisory services that put your interests first.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-700 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Personalized Investment Plans</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-700 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Risk Assessment & Management</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-700 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Market Research & Analysis</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-700 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Portfolio Diversification</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 