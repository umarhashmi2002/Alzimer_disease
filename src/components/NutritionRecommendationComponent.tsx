import React, { useState } from 'react';

const NutritionRecommendationComponent: React.FC = () => {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendation = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` // Use environment variable for Vite
        },
        body: JSON.stringify({
          model: 'chatgpt-4o-1.0',
          prompt: 'Provide a personalized nutrition recommendation based on the user\'s fitness data.',
          max_tokens: 100
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setRecommendation(data.choices[0].text.trim());
    } catch (err) {
      console.error('Error fetching recommendation:', err);
      setError('Failed to fetch recommendation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="nutrition-recommendation-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Nutrition Recommendation</h2>
      <button 
        className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white hover:bg-blue-600 transition-colors`}
        onClick={getRecommendation} 
        disabled={loading}>
        {loading ? 'Loading...' : 'Get Recommendation'}
      </button>
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {recommendation && <div className="mt-4 p-4 bg-gray-100 rounded text-black shadow-inner">{recommendation}</div>}
    </section>
  );
};

export default NutritionRecommendationComponent;
