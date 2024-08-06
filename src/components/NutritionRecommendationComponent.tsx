import React, { useState } from 'react';
import { getNutritionRecommendation } from '../apiService';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    <section className="nutrition-recommendation-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Nutrition Recommendation</h2>
      <button 
        className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white hover:bg-blue-600 transition-colors`}
        onClick={handleGetRecommendation} 
        disabled={loading}>
        {loading ? 'Loading...' : 'Get Recommendation'}
      </button>
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {recommendation && (
        <div className="mt-4 p-4 bg-gray-100 rounded text-black shadow-inner">
          <div dangerouslySetInnerHTML={{ __html: recommendation }} />
          <button 
            className="mt-4 w-full py-2 px-4 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
            onClick={handleDownloadPDF}>
            Download as PDF
          </button>
        </div>
      )}
    </section>
  );
};

export default NutritionRecommendationComponent;
