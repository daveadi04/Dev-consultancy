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
      icon: <FaUserTie size={40} className="text-blue-600" />,
      title: "Expertise & Experience",
      description: "With over 20 years of experience in Angel Broking & Motilal Oswal, we bring deep industry knowledge and market expertise to every client relationship."
    },
    {
      icon: <FaRegLightbulb size={40} className="text-blue-600" />,
      title: "Personalized Investment Strategies",
      description: "We develop customized investment plans tailored to your specific financial goals, risk tolerance, and time horizons."
    },
    {
      icon: <FaChartLine size={40} className="text-blue-600" />,
      title: "Market Insights & Research",
      description: "Our data-driven approach and continuous market research ensure that your investment decisions are backed by thorough analysis."
    },
    {
      icon: <FaUsers size={40} className="text-blue-600" />,
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-6 p-3 bg-blue-50 rounded-lg">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        {/* Client Quote */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6">
            <span className="text-5xl text-yellow-500">👨‍💼</span>
          </div>
          <blockquote className="text-2xl italic font-medium text-gray-700 mb-6">
            &ldquo;Dev Consultancy transformed my investment approach. Their personalized strategies have consistently delivered results beyond my expectations.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="font-semibold text-gray-900">Rajesh Sharma</div>
              <div className="text-sm text-gray-500">Client for 5 years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 