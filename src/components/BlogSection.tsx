'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Nifty & Sensex Movements: A Beginner's Guide",
      excerpt: "Learn how to interpret market indices and understand what drives their movements. This guide breaks down complex market indicators into simple concepts.",
      category: "Market Basics",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "5 Common Investment Mistakes to Avoid in the Current Market",
      excerpt: "Even experienced investors make these common mistakes. Learn how to identify and avoid these pitfalls to protect your portfolio during volatile markets.",
      category: "Investment Strategy",
      date: "June 3, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b3d5a0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "The Power of SIPs: Building Wealth Through Systematic Investing",
      excerpt: "Systematic Investment Plans (SIPs) offer a disciplined approach to wealth creation. Discover how small, regular investments can lead to significant returns over time.",
      category: "Mutual Funds",
      date: "July 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Market Insights
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
            Stay updated with the latest market trends, investment tips, and financial news
          </motion.p>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold py-1 px-2 rounded-full flex items-center">
                    <FaTag className="mr-1" />
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-3 flex items-center">
                    <FaClock className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{post.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <button className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center">
                    Read More <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Analysis */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 shadow-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex items-center justify-between">
            <div className="md:w-3/5 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">2023 Market Outlook: Navigating Economic Shifts</h3>
              <p className="text-blue-100 mb-6">
                Our comprehensive analysis of current economic indicators and market trends to help you position your portfolio for the coming quarters.
              </p>
              <div className="flex space-x-3">
                <button className="bg-white text-blue-700 hover:bg-blue-50 py-2 px-6 rounded-md font-medium transition-colors">
                  Download Report
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-white/10 py-2 px-6 rounded-md font-medium transition-colors">
                  Watch Analysis
                </button>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold text-xl mb-4">Key Highlights:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                    Sector rotation opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                    Impact of global economic policies
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                    Inflation trends and investment strategies
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                    Emerging market opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 