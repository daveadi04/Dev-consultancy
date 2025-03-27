'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Thank you! We will get back to you soon.'
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to transform your financial future? Schedule a free consultation with our expert team or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">Free Investment Consultation</h3>
            
            {formStatus.isSuccess && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                {formStatus.message}
              </div>
            )}
            
            {formStatus.isError && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Investment Planning">Investment Planning</option>
                  <option value="Portfolio Management">Portfolio Management</option>
                  <option value="Trading Consultation">Trading Consultation</option>
                  <option value="Tax Advisory">Tax Advisory</option>
                  <option value="Stock Market Training">Stock Market Training</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-700"
                  rows={4}
                  placeholder="Tell us about your financial goals or any specific questions you have"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-semibold
                  ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-blue-900'} 
                  transition duration-300 shadow-lg`}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
              </button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We respect your privacy and adhere to strict confidentiality standards.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div>
            <motion.div 
              className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl p-8 shadow-2xl mb-8 border border-blue-800/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="text-2xl text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p>+91 8655364812</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-2xl text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>devdave2012@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-2xl text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p>
                      2HW2+8R2, Memnagar Rd,<br />
                      Sarvottam Nagar Society,<br />
                      Navrangpura, Ahmedabad,<br />
                      Gujarat 380014, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaWhatsapp className="text-2xl text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918655364812"
                      className="hover:text-yellow-500 transition duration-300"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">Visit Our Office</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939666829574!2d72.54961597500275!3d23.03331447913361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c618f86fc3%3A0x8b6bb7e2c2c1c89e!2sSarvottam%20Nagar%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380014!5e0!3m2!1sen!2sin!4v1711460431789!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 