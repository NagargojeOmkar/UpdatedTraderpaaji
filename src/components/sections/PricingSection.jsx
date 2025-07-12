// src/components/sections/PricingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../ui/PricingCard';
import { FaArrowRight } from 'react-icons/fa';

const PricingSection = () => {
  // Services data with updated pricing plans and purchase links
  const services = [
    {
      title: 'Intraday Premium',
      description: 'Quality intraday calls with max 4 calls per day',
      features: [
        'Index Options Intraday',
        'No Overtrading',
        'WhatsApp & Telegram Updates'
      ],
      plans: [
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
          period: '12 Months',
          originalPrice: '₹86000',
          discountedPrice: '₹15,000',
          discount: '84% Off'
        }
      ],
      purchaseLink: "https://rpy.club/g/sUONQyvysn"
    },
    {
      title: 'Options Swing',
      description: 'Options swing trading for job/business professionals',
      features: [
        'Stock & Index Options',
        'Trade Management Guidance',
        'WhatsApp & Telegram Updates'
      ],
      plans: [
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
      ],
      purchaseLink: "https://rpy.club/g/CnQde16U8Y"
    },
    {
      title: 'Equity Premium',
      description: 'Quality swing stocks with researched entry/exit',
      features: [
        'Equity Cash for Swing',
        'Well Researched',
        'Proper Entry & Exit'
      ],
      plans: [
        {
          period: '3 Months',
          originalPrice: '₹44999',
          discountedPrice: '₹5999',
          discount: '60% Off'
        },
        {
          period: '6 Months',
          originalPrice: '₹29999',
          discountedPrice: '₹9999',
          discount: '66% Off'
        },
        {
          period: '12 Months',
          originalPrice: '₹59999',
          discountedPrice: '₹15,999',
          discount: '73% Off'
        }
      ],
      purchaseLink: "https://traderpaaji.rpy.club/g/UTLGE0l2C1"
    },
    {
      title: 'All-In-One Combo',
      description: 'Complete package for all trading styles',
      features: [
        'Index Option Intraday',
        'Stock Option Swing',
        'Equity Cash Swing'
      ],
      plans: [
        {
          period: '1 Month',
          originalPrice: '₹20000',
          discountedPrice: '₹4999',
          discount: '75% Off'
        },
        {
          period: '3 Months',
          originalPrice: '₹60000',
          discountedPrice: '₹9999',
          discount: '83% Off'
        },
        {
          period: '1 Year',
          originalPrice: '₹240000',
          discountedPrice: '₹34,999',
          discount: '84% Off'
        }
      ],
      purchaseLink: "https://traderpaaji.rpy.club/g/aGHwL3ODHr"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center relative text-gray-900"
        >
          Our Premium Services
          <div className="w-20 h-1 bg-green-500 mx-auto mt-3"></div>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Choose from our research services designed to cater to different trading styles and preferences
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              plans={service.plans}
              popularIndex={1} // Highlight the middle plan by default
              purchaseLink={service.purchaseLink}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold">
            View All Services <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;