// apiService.ts

export const getNutritionRecommendation = async () => {
    try {
      const response = await fetch('https://mzef6aqeih.execute-api.us-east-1.amazonaws.com/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Provide a personalized nutrition recommendation based on the user\'s fitness data.' }
          ],
          max_tokens: 100,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.choices[0].message?.content.trim() || 'No recommendation available.';
    } catch (err) {
      console.error('Error fetching recommendation:', err);
      throw new Error('Failed to fetch recommendation.');
    }
  };
  