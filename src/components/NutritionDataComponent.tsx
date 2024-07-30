import React, { useEffect, useState } from 'react';

// Define the NutritionData type correctly
type NutritionData = {
  userId: string;
  date: string;
  mealType: string;
  calories: number;
};

const NutritionDataComponent: React.FC = () => {
  const [nutritionData, setNutritionData] = useState<Array<NutritionData>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const dataItems: Array<NutritionData> = []; // Mocked data fetching
        setNutritionData(dataItems);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchNutritionData();
  }, []);

  const createNutritionData = async () => {
    const mealType = window.prompt('Meal type');
    const calories = parseFloat(window.prompt('Calories') || '0');
    try {
      const newData: NutritionData = {
        userId: 'currentUserId', // Replace with the actual user ID
        date: new Date().toISOString().split('T')[0],
        mealType: mealType || '',
        calories,
      };
      setNutritionData([...nutritionData, newData]);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const deleteNutritionData = async (id: string) => {
    try {
      setNutritionData(nutritionData.filter((data) => data.userId !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <section>
      <h2>Nutrition Data</h2>
      <button onClick={createNutritionData}>+ Add Nutrition Data</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {nutritionData.map((data) => (
          <li key={data.userId}>
            {data.date}: {data.mealType} - {data.calories} kcal
            <button onClick={() => deleteNutritionData(data.userId)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NutritionDataComponent;
