export const getNutritionRecommendation = async () => {
  try {
    const response = await fetch('https://wwna9e4h70.execute-api.us-east-1.amazonaws.com/dev', {
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

    // Remove the unused variable assignment
    JSON.parse(data.body);

    // Return HTML formatted recommendation
    return `
      <h3 style="color: #2c3e50; font-weight: bold;">Nutrition Plan</h3>
      <ul style="color: #34495e;">
        <li style="margin-bottom: 10px;">
          <strong>1. Balanced Diet:</strong>
          <ul>
            <li><strong>Proteins:</strong> Include lean proteins such as chicken, turkey, fish, eggs, tofu, legumes, and low-fat dairy products.</li>
            <li><strong>Carbohydrates:</strong> Opt for complex carbs like whole grains (brown rice, quinoa, whole wheat bread), vegetables, fruits, and legumes.</li>
            <li><strong>Fats:</strong> Incorporate healthy fats from sources like avocados, nuts, seeds, olive oil, and fatty fish (salmon, mackerel).</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;">
          <strong>2. Hydration:</strong>
          <ul>
            <li>Aim to drink at least 8-10 glasses of water daily. Hydration is key for overall bodily functions and energy levels.</li>
            <li>Limit sugary drinks and excessive caffeine.</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;">
          <strong>3. Portion Control:</strong>
          <ul>
            <li>Use smaller plates to help manage portion sizes.</li>
            <li>Practice mindful eating, paying attention to hunger and fullness cues.</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;">
          <strong>4. Meal Frequency:</strong>
          <ul>
            <li>Eat regular meals and snacks throughout the day. Aim for three balanced meals and 1-2 healthy snacks.</li>
            <li>Don’t skip breakfast. Include protein, healthy fats, and fiber-rich carbs to start the day right.</li>
          </ul>
        </li>
      </ul>
    `;
  } catch (err) {
    console.error('Error fetching recommendation:', err);
    throw new Error('Failed to fetch recommendation.');
  }
};
