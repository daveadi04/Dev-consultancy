'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChartLine, FaRupeeSign, FaShieldAlt, FaChartBar, FaUserTie, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const credentials = {
    registration: "INZ0001588",
    exchanges: "BSE/NSE/MCX/NCDEX",
    depository: "CDSL and NSDL IN-DP-16-2015",
    email: "devdave2012@gmail.com"
  };

  const services = [
    {
      icon: <FaChartLine className="text-blue-600 text-2xl sm:text-3xl" />,
      title: "Portfolio Management Services (PMS)",
      description: "Expert portfolio management tailored to your goals"
    },
    {
      icon: <FaChartBar className="text-blue-600 text-2xl sm:text-3xl" />,
      title: "Alternative Investment Fund (AIF)",
      description: "Diverse investment opportunities for growth"
    },
    {
      icon: <FaUserTie className="text-blue-600 text-2xl sm:text-3xl" />,
      title: "Professional Fund Management",
      description: "Strategic fund management by experts"
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl sm:text-3xl" />,
      title: "Mutual Funds",
      description: "Curated mutual fund solutions"
    }
  ];

  return (
    <>
      {/* Navigation Header */}
      <header className="nav-container">
        <div className="nav-content">
          <motion.div 
            className="nav-brand"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="nav-brand-text">
              <span>Dev</span> <span>Consultancy</span>
            </div>
          </motion.div>
          <nav className="nav-links hidden md:flex">
            {['Home', 'About', 'Services', 'Why Choose Us', 'Testimonials', 'Blog', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.toLowerCase().replace(/\s+/g, '-')}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <section 
        id="home" 
        className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
      >
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0 z-0">
          {/* Main Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              filter: 'brightness(0.7) saturate(1.2) contrast(1.1)'
            }}
          />

          {/* Overlay Pattern - BSE/NSE Style */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-gradient opacity-90"></div>

          {/* Animated Market Data Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_var(--secondary)_1px,_transparent_1px)] bg-[length:20px_20px] animate-slide"></div>
          </div>

          {/* Additional Overlay for Depth */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <FaRupeeSign className="text-yellow-400 text-2xl sm:text-3xl animate-float" />
                <h2 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                  Dev Consultancy
                </h2>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Transform Your Financial Future with Expert Guidance
              </h1>
            </motion.div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
              &ldquo;Buy Right, Sit Tight&rdquo; - Your trusted partner in building lasting wealth through strategic investments and expert guidance.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary w-full sm:w-auto text-sm md:text-base"
              >
                Open Your Account
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-secondary w-full sm:w-auto text-sm md:text-base"
              >
                Explore Investment Solutions
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                  <h3 className="text-lg md:text-xl font-semibold mt-3 md:mt-4 mb-2">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-6 md:mt-8 flex justify-center gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href={`mailto:${credentials.email}`} className="text-white hover:text-yellow-400 transition-colors">
                <FaEnvelope className="text-xl md:text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaLinkedin className="text-xl md:text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaTwitter className="text-xl md:text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <FaWhatsapp className="text-xl md:text-2xl" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute right-0 top-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow delay-150"></div>
        
        <motion.div 
          className="absolute right-4 sm:right-10 top-1/3 text-yellow-400 text-4xl sm:text-6xl opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChartLine />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection; 