import React, { useEffect, useState } from 'react';
import '../index.css'; // Assuming you're adding the styles to your index.css or App.css

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
    <section className="nutrition-data-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Nutrition Data</h2>
      <button 
        className="w-full bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600 transition-colors"
        onClick={createNutritionData}>
        + Add Nutrition Data
      </button>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <table className="nutrition-data-table w-full border-collapse bg-gray-50 text-left shadow-sm">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Meal Type</th>
            <th className="py-2 px-4 border-b">Calories (kcal)</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {nutritionData.map((data) => (
            <tr key={data.userId} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border-b">{data.date}</td>
              <td className="py-2 px-4 border-b">{data.mealType}</td>
              <td className="py-2 px-4 border-b">{data.calories}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                  onClick={() => deleteNutritionData(data.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NutritionDataComponent;
