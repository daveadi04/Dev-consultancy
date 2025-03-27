'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Mehta",
      position: "Business Owner",
      image: "👩‍💼",
      quote: "Dev Consultancy helped me diversify my investment portfolio, resulting in a 32% increase in returns within the first year. Their expertise in market analysis and personalized approach sets them apart.",
      rating: 5
    },
    {
      id: 2,
      name: "Vikram Singh",
      position: "IT Professional",
      image: "👨‍💻",
      quote: "As a first-time investor, I was nervous about entering the stock market. Dev's patient guidance and educational approach helped me build a strong foundation. Now I'm confidently growing my investments with their support.",
      rating: 5
    },
    {
      id: 3,
      name: "Neha Sharma",
      position: "Doctor",
      image: "👩‍⚕️",
      quote: "The team at Dev Consultancy provided me with a tax-efficient investment strategy that perfectly aligned with my long-term retirement goals. Their attention to detail and proactive updates keep me informed and confident.",
      rating: 5
    },
    {
      id: 4,
      name: "Arjun Patel",
      position: "Entrepreneur",
      image: "👨‍💼",
      quote: "After trying several financial advisors, I found Dev Consultancy to be truly exceptional. Their research-backed approach to stock selection and portfolio management has consistently outperformed my previous investments.",
      rating: 5
    },
    {
      id: 5,
      name: "Anjali Gupta",
      position: "Software Engineer",
      image: "👩‍💻",
      quote: "I've been working with Dev for over 3 years, and I'm impressed by their ability to adapt strategies to changing market conditions. My SIP portfolio has shown remarkable stability even during market volatility.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
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
            Hear what our clients have to say about their experience working with Dev Consultancy
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          key={testimonials[activeIndex].id}
        >
          <div className="md:flex">
            <div className="md:shrink-0 bg-blue-700 p-8 md:p-12 flex flex-col justify-center items-center">
              <div className="flex items-center justify-center text-5xl mb-4">
                {testimonials[activeIndex].image}
              </div>
              <div className="mt-4 text-center">
                <div className="text-xl font-bold text-white">{testimonials[activeIndex].name}</div>
                <div className="text-blue-200">{testimonials[activeIndex].position}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonials[activeIndex].rating ? "text-yellow-500" : "text-gray-400"} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex items-center">
              <blockquote>
                <FaQuoteLeft className="text-4xl text-blue-700 opacity-20 mb-4" />
                <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-700 w-6' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Case Study */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-blue-700 rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 md:p-16">
              <h3 className="text-3xl font-bold text-white mb-6">Success Story</h3>
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">How We Helped Mr. Sharma Grow His Portfolio by 43%</h4>
              <p className="text-blue-100 mb-6">
                Mr. Sharma approached us with a conventional fixed deposit-heavy portfolio that was barely beating inflation. 
                Our team analyzed his financial goals, risk tolerance, and created a balanced strategy including:
              </p>
              <ul className="text-blue-100 space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                  Diversified mutual fund allocation
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                  Strategic large-cap stock investments
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                  Tax-efficient SIPs with automatic rebalancing
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                  Small exposure to high-growth mid-cap opportunities
                </li>
              </ul>
              <div className="flex items-center">
                <div className="font-bold text-white text-4xl">43%</div>
                <div className="ml-3 text-blue-100">Portfolio growth <br />in 18 months</div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-900 p-10 md:p-16 flex flex-col justify-center">
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <div className="text-gray-400 mb-2">Initial Portfolio</div>
                <div className="h-8 bg-gray-700 rounded-full overflow-hidden flex mb-1">
                  <div className="bg-gray-500 h-full w-3/5"></div>
                  <div className="bg-gray-600 h-full w-1/5"></div>
                  <div className="bg-gray-400 h-full w-1/5"></div>
                </div>
                <div className="flex text-xs justify-between text-gray-500">
                  <span>Fixed Deposits (60%)</span>
                  <span>Gold (20%)</span>
                  <span>Stocks (20%)</span>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-gray-400 mb-2">Optimized Portfolio</div>
                <div className="h-8 bg-gray-700 rounded-full overflow-hidden flex mb-1">
                  <div className="bg-blue-600 h-full w-2/5"></div>
                  <div className="bg-green-600 h-full w-1/5"></div>
                  <div className="bg-yellow-600 h-full w-1/5"></div>
                  <div className="bg-red-600 h-full w-1/5"></div>
                </div>
                <div className="flex text-xs justify-between text-gray-500">
                  <span>Mutual Funds (40%)</span>
                  <span>Large-cap (20%)</span>
                  <span>Mid-cap (20%)</span>
                  <span>FDs (20%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 