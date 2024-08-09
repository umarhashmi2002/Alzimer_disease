import React, { useState } from 'react';
import { getNutritionRecommendation } from '../apiService';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { motion } from 'framer-motion';

const NutritionRecommendationComponent: React.FC = () => {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendation = async () => {
    setLoading(true);
    setError(null);
    try {
      const recommendation = await getNutritionRecommendation();
      setRecommendation(recommendation);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!recommendation) return;

    const doc = new jsPDF();
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('Nutrition and Fitness Recommendation', 10, 10);
    
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    doc.text(recommendation, 10, 20);
    doc.save('recommendation.pdf');
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="nutrition-recommendation-section p-8 bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Nutrition & Fitness Insights
        </motion.h1>

        <motion.h2 
          className="text-xl font-semibold text-center text-gray-700 mb-6"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Get Your Personalized Plan
        </motion.h2>
        
        <motion.button 
          className={`w-full py-3 px-6 rounded-full text-lg font-medium transition-all duration-300 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white shadow-lg transform hover:scale-105'
          }`}
          onClick={handleGetRecommendation} 
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendation'}
        </motion.button>
        
        {error && (
          <motion.div 
            className="text-red-500 text-center mt-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}
        
        {recommendation && (
          <motion.div 
            className="mt-8 p-6 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-inner text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div dangerouslySetInnerHTML={{ __html: recommendation }} />
            <motion.button 
              className="mt-6 w-full py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium shadow-lg transform hover:scale-105 transition-transform"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </motion.button>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  );
};

export default NutritionRecommendationComponent;
