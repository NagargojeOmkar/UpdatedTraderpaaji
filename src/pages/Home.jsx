// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PricingSection from '../components/sections/PricingSection';
import { FaArrowRight, FaWhatsapp, FaChartLine, FaBullseye, FaBrain } from 'react-icons/fa';

// Import assets
import raPhoto from '../assets/traderpaaji.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* Floating WhatsApp Button - Responsive */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center p-3 transition-all duration-300 bg-green-500 rounded-full shadow-lg bottom-4 right-4 md:bottom-6 md:right-6 hover:bg-green-600 group md:p-4"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
        <span className="absolute px-2 py-1 text-xs text-white transition-all duration-300 bg-green-600 rounded opacity-0 top-0 -translate-y-full whitespace-nowrap group-hover:opacity-100">
          Chat with us
        </span>
      </a>

      {/* Hero Section - Better Aligned Badges */}
      <section className="relative px-4 py-12 overflow-hidden bg-gradient-to-b from-white to-blue-50 sm:px-6 lg:px-8 md:py-24">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-48 h-48 bg-blue-400 rounded-full -top-12 -right-12 md:w-64 md:h-64 md:-top-20 md:-right-20 filter blur-3xl"></div>
          <div className="absolute w-48 h-48 bg-yellow-400 rounded-full bottom-6 left-6 md:w-64 md:h-64 md:bottom-10 md:left-10 filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center lg:flex-row">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center lg:w-1/2 lg:text-left"
            >
              {/* SEBI badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1.5 mb-5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow md:px-4 md:py-2 md:text-sm"
              >
                <svg className="w-3 h-3 mr-1 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                SEBI Registered Research Analyst: INH000014845
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Master the Markets with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">TraderPaaji</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-5 text-base text-gray-600 md:text-lg max-w-2xl mx-auto lg:mx-0"
              >
                SEBI-Registered Research Analyst with 8+ years expertise in options & swing trading.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block p-3 mb-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200 shadow-sm md:p-4"
              >
                <p className="font-semibold text-blue-800 text-base md:text-lg">
                  <span className="font-bold text-xl md:text-2xl">3,000+</span> traders trained • <span className="font-bold text-xl md:text-2xl">1100+</span> Happy clients
                </p>
              </motion.div>
              
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6 space-y-3 max-w-xl mx-auto lg:mb-8 lg:mx-0"
              >
                <li className="flex items-center p-3 text-gray-800 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-gray-100 shadow-sm md:p-4">
                  <span className="flex items-center justify-center w-7 h-7 mr-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full md:w-8 md:h-8">
                    <FaChartLine className="text-blue-600 text-sm md:text-base" />
                  </span>
                  <span className="text-base font-medium md:text-lg">Live Market Support & Guidance</span>
                </li>
                <li className="flex items-center p-3 text-gray-800 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-gray-100 shadow-sm md:p-4">
                  <span className="flex items-center justify-center w-7 h-7 mr-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full md:w-8 md:h-8">
                    <FaBullseye className="text-blue-600 text-sm md:text-base" />
                  </span>
                  <span className="text-base font-medium md:text-lg">Intraday & Swing Trading Insights</span>
                </li>
                <li className="flex items-center p-3 text-gray-800 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-gray-100 shadow-sm md:p-4">
                  <span className="flex items-center justify-center w-7 h-7 mr-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full md:w-8 md:h-8">
                    <FaBrain className="text-blue-600 text-sm md:text-base" />
                  </span>
                  <span className="text-base font-medium md:text-lg">Trading Psychology & Risk Management</span>
                </li>
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center px-5 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 md:px-6 md:py-3.5 md:text-lg"
                >
                  Start Your Trading Journey
                  <FaArrowRight className="ml-2 text-sm md:text-base" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Photo Column - Better Aligned Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center w-full mt-10 lg:mt-0 lg:w-1/2"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* RA Photo */}
                <div className="relative overflow-hidden border-4 border-white rounded-2xl shadow-xl md:border-6 lg:border-8">
                  <img 
                    src={raPhoto} 
                    alt="TraderPaaji - SEBI Registered Research Analyst" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
                </div>
                
                {/* Credentials badges - Improved Alignment */}
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow md:px-5 md:py-2.5 md:text-sm lg:translate-y-3/4 lg:px-6 lg:py-3"
                >
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    SEBI Registered
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 left-0 px-4 py-2 text-xs font-bold text-white transform -translate-x-1/4 -translate-y-1/4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow md:py-3 md:px-6 md:text-sm lg:px-7 lg:py-4"
                >
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    8+ Years Experience
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Stats Section */}
      <section className="px-4 py-12 text-white bg-gradient-to-r from-blue-600 to-blue-800 sm:px-6 lg:px-8 md:py-20" id="results">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-2xl font-bold md:text-3xl"
            >
              Proven Track Record
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 mx-auto bg-yellow-400 md:w-20"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            {[
              { 
                value: "8+", 
                label: "Years Experience",
                description: "Market analysis since 2015",
                icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              },
              { 
                value: "3,000+", 
                label: "Traders Trained",
                description: "Workshops & mentorship",
                icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              },
              { 
                value: "1100+", 
                label: "Happy Clients",
                description: "Premium programs",
                icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 border rounded-xl border-blue-500/30 bg-blue-700/20 backdrop-blur-sm md:p-6"
              >
                <div className="flex justify-center mb-3 text-yellow-400 md:mb-4">
                  {stat.icon}
                </div>
                <div className="mb-1 text-3xl font-bold text-yellow-400 md:text-4xl">{stat.value}</div>
                <div className="mb-1 text-lg font-medium text-white md:text-xl">{stat.label}</div>
                <div className="text-xs text-blue-100 md:text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-800 sm:px-6 lg:px-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-6 border rounded-2xl border-white/20 bg-white/10 backdrop-blur-sm md:p-10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute w-40 h-40 bg-yellow-400 rounded-full -top-10 -right-10 filter blur-3xl opacity-10 md:w-64 md:h-64 md:-top-20 md:-right-20"></div>
            <div className="absolute w-40 h-40 bg-blue-400 rounded-full -bottom-10 -left-10 filter blur-3xl opacity-10 md:w-64 md:h-64 md:-bottom-20 md:-left-20"></div>
            
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-2xl font-bold text-white md:text-3xl"
            >
              Ready to Transform Your Trading?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-base text-blue-100 md:text-lg max-w-2xl mx-auto"
            >
              Join our community of successful traders and take control of your financial future
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 text-base font-bold text-blue-600 transition-all duration-300 bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-lg hover:from-gray-100 hover:to-white transform hover:scale-105 md:px-8 md:py-3.5 md:text-lg"
              >
                Get Started Now
                <FaArrowRight className="ml-2 text-sm md:text-base" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;