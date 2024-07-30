// src/components/NutritionRecommendationComponent.tsx
import React, { useState } from 'react';


const NutritionRecommendationComponent: React.FC = () => {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendation = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          prompt: 'Provide a personalized nutrition recommendation based on the user\'s fitness data.',
          max_tokens: 100
        })
      });
      const data = await response.json();
      setRecommendation(data.choices[0].text.trim());
    } catch (err) {
      setError('Failed to fetch recommendation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Nutrition Recommendation</h2>
      <button onClick={getRecommendation} disabled={loading}>
        {loading ? 'Loading...' : 'Get Recommendation'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {recommendation && <div>{recommendation}</div>}
    </section>
  );
};

export default NutritionRecommendationComponent;
