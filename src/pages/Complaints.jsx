// src/pages/Complaints.jsx
import React from 'react';
import { motion } from 'framer-motion';
import complaintsImage from '../assets/complaints.jpg';

const Complaints = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 text-gray-900"
          >
            Complaint Board
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600 mb-12"
          >
            As per SEBI regulations, we maintain complete transparency in our complaint resolution process
          </motion.p>
        </div>
      </section>

      {/* Image Display Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src={complaintsImage} 
              alt="Complaint Resolution Process" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Complaint Data Section - Simplified */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complaint Data
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <p className="text-gray-700 mb-4 italic">
                By KULNEET SINGH GURMEET SINGH BINDRA / July 12, 2025
              </p>
              
              <div className="border-t border-gray-200 my-4"></div>
              
              <p className="text-lg text-gray-800">
                Complaint Data – To be displayed by RAs – As required by SEBI Circular – 
                SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/81 Dt. 02-06-2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Complaints;