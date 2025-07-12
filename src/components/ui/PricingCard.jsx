// src/components/ui/PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const springConfig = {
  type: "spring",
  stiffness: 400,
  damping: 15
};

const PlanItem = ({ plan, isPopular }) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    transition={springConfig}
    className={`relative rounded-xl p-4 transition-all duration-200 border ${
      isPopular 
        ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-sm ring-1 ring-yellow-200' 
        : 'border-gray-200 bg-gray-50'
    }`}
  >
    {isPopular && (
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md"
      >
        MOST POPULAR
      </motion.div>
    )}
    
    <div className={`${isPopular ? 'mt-2' : ''} w-full`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-medium text-gray-900 mr-2">{plan.period}</span>
          {isPopular && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
              Best Value
            </span>
          )}
        </div>
        
        <div className="text-right">
          <div className="flex items-baseline justify-end">
            <span className="text-xl font-bold text-blue-700">
              {plan.discountedPrice}
            </span>
          </div>
          <div className="text-gray-400 line-through text-sm">
            {plan.originalPrice}
          </div>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between items-center bg-blue-50/50 p-2 rounded-lg">
        <span className="text-xs text-gray-600 font-medium">Effective rate</span>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
          {plan.discount}
        </span>
      </div>
    </div>
  </motion.div>
);

const FeatureItem = ({ feature }) => (
  <motion.li 
    whileHover={{ x: 5 }}
    transition={springConfig}
    className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-all"
  >
    <span className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full mr-3 flex-shrink-0">
      <FaCheck className="text-green-600 text-xs" />
    </span>
    <span className="text-gray-700 text-sm font-medium">{feature}</span>
  </motion.li>
);

const PricingCard = ({ 
  title, 
  description,
  features, 
  plans,
  popularIndex = 1,
  purchaseLink
}) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={springConfig}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full flex flex-col transition-all duration-300 shadow-lg hover:shadow-xl relative"
    >
      {/* Professional accent bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-800 w-full" />
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Header with subtle gradient background */}
        <div className="text-center mb-6 py-3 rounded-lg bg-gradient-to-b from-blue-50 to-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm max-w-xs mx-auto">{description}</p>
        </div>
        
        {/* Pricing Plans - Professional vertical layout */}
        <div className="space-y-3 mb-6">
          {plans.map((plan, index) => (
            <PlanItem 
              key={`${title}-plan-${index}`}
              plan={plan}
              isPopular={index === popularIndex}
            />
          ))}
        </div>
        
        {/* Features List - Professional presentation */}
        <div className="flex-grow mb-6">
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-4 text-center text-sm uppercase tracking-wider text-blue-700">
              Included Features
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={`${title}-feature-${index}`}
                  feature={feature} 
                />
              ))}
            </ul>
          </div>
        </div>
        
        {/* Professional CTA Button */}
        <motion.a 
          href={purchaseLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springConfig}
          className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl mt-auto flex items-center justify-center group cursor-pointer"
        >
          Select Plan
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PricingCard;