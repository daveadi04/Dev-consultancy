'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Select a service'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message || formData.service === 'Select a service') {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill all the fields'
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // In a real application, you would submit the form data to your backend here
    
    // Simulate success
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'Select a service'
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90 dark:bg-gray-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our services? Schedule a free consultation or reach out to us directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Free Consultation</h3>
            
            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="service">
                  Service of Interest *
                </label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                >
                  <option disabled>Select a service</option>
                  <option>Investment Planning</option>
                  <option>Portfolio Management</option>
                  <option>Trading Consultation</option>
                  <option>Tax & Wealth Advisory</option>
                  <option>Stock Market Training</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 h-32 resize-none"
                  placeholder="Tell us about your financial goals or any specific questions you have"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Schedule Free Consultation
              </button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-700 rounded-xl shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-md mr-4">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+918655364812" className="text-blue-100 hover:text-white transition-colors">
                      +91 8655364812
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-md mr-4">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:devdave_2012@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                      devdave_2012@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-md mr-4">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=2HW2%2B8R2%2C+Memnagar+Rd%2C+Sarvottam+Nagar+Society%2C+Navrangpura%2C+Ahmedabad%2C+Gujarat+380014%2C+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      2HW2+8R2, Memnagar Rd,<br />
                      Sarvottam Nagar Society,<br />
                      Navrangpura, Ahmedabad,<br />
                      Gujarat 380014, India
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-md mr-4">
                    <FaWhatsapp className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918655364812"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Our Location</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe 
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8889088636604!2d72.55739797599761!3d23.03173001569939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c0e9664495%3A0x42e2e8d3618d3b2d!2sSarvottam%20Nagar%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380014!5e0!3m2!1sen!2sin!4v1711432108040!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 