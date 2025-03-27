'use client';

import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaUserTie, 
  FaRegLightbulb, 
  FaUsers
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserTie size={40} className="text-blue-700" />,
      title: "Expertise & Experience",
      description: "With over 10 years of experience in Angel Broking & Motilal Oswal, we bring deep industry knowledge and market expertise to every client relationship."
    },
    {
      icon: <FaRegLightbulb size={40} className="text-blue-700" />,
      title: "Personalized Investment Strategies",
      description: "We develop customized investment plans tailored to your specific financial goals, risk tolerance, and time horizons."
    },
    {
      icon: <FaChartLine size={40} className="text-blue-700" />,
      title: "Market Insights & Research",
      description: "Our data-driven approach and continuous market research ensure that your investment decisions are backed by thorough analysis."
    },
    {
      icon: <FaUsers size={40} className="text-blue-700" />,
      title: "Client Satisfaction",
      description: "Our track record of client success stories and high retention rates speaks to our commitment to delivering exceptional results."
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "₹120Cr+", label: "Assets Managed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
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
            Discover the advantages of partnering with Dev Consultancy for your financial journey
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mr-6 mt-1">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-700 rounded-xl p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Highlight */}
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6">
            <svg className="h-12 w-12 text-yellow-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-2xl italic font-medium text-gray-700 dark:text-gray-200 mb-6">
            &quot;Dev Consultancy transformed my investment approach. Their personalized strategies have consistently delivered results beyond my expectations.&quot;
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Client" 
              className="h-12 w-12 rounded-full border-2 border-blue-500 mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-800 dark:text-white">Rajesh Sharma</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Client for 3 years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 