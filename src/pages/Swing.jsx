// src/pages/Swing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/ui/PricingCard';
import { FaChartLine, FaClock, FaMobileAlt, FaFileAlt } from 'react-icons/fa';

const Swing = () => {
  const features = [
    { 
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "2-3 Trades Weekly",
      description: "Carefully selected swing opportunities"
    },
    { 
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "1-3 Day Holding",
      description: "Perfect for busy professionals"
    },
    { 
      icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
      title: "Mobile Alerts",
      description: "Real-time entry/exit notifications"
    },
    { 
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      title: "Detailed Reports",
      description: "Weekly performance analysis"
    }
  ];

  const plans = [
    {
      period: '1 Month',
      originalPrice: '₹8000',
      discountedPrice: '₹3599',
      discount: '55% Off'
    },
    {
      period: '6 Months',
      originalPrice: '₹45000',
      discountedPrice: '₹9999',
      discount: '79% Off'
    },
    {
      period: '1 Year',
      originalPrice: '₹86000',
      discountedPrice: '₹15,000',
      discount: '84% Off'
    }
  ];

  const purchaseLink = "https://rpy.club/g/CnQde16U8Y";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Options Swing Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Perfect for job holders and busy individuals. Get high-probability swing trades with clear entry and exit levels.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Why Choose Swing Trading?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Swing trading allows you to capture gains in options and futures over a period of a few days to several weeks.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-blue-600 transition-all"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pricing Plans</h2>
          <div className="max-w-4xl mx-auto">
            <PricingCard 
              title="Options Swing"
              description="Options swing trading for job/business professionals"
              features={[
                "Stock & Index Options",
                "Trade Management Guidance",
                "WhatsApp & Telegram Updates"
              ]}
              plans={plans}
              popularIndex={1}
              purchaseLink={purchaseLink}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Swing Trading Today</h2>
          <p className="text-xl mb-8">
            Join hundreds of successful traders who balance their jobs with profitable trading.
          </p>
          <button 
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = purchaseLink}
          >
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Swing;