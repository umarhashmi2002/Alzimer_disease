import React, { useEffect, useState } from 'react';
import '../index.css'; // Assuming you're adding the styles to your index.css or App.css

// Define the NutritionData type correctly
type NutritionData = {
  id: string;
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

  const createNutritionData = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const mealType = form.mealType.value;
    const calories = parseFloat(form.calories.value);

    try {
      const newData: NutritionData = {
        id: Date.now().toString(), // Simple ID generation based on timestamp
        userId: 'currentUserId', // Replace with the actual user ID
        date: new Date().toISOString().split('T')[0],
        mealType,
        calories,
      };
      setNutritionData([...nutritionData, newData]);
      form.reset(); // Clear form inputs after submission
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const deleteNutritionData = async (id: string) => {
    try {
      const updatedNutritionData = nutritionData.filter((data) => data.id !== id);
      setNutritionData(updatedNutritionData);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <section className="nutrition-data-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Nutrition Data Component</h1> {/* New Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Nutrition Data</h2>

      {/* Nutrition Data Form */}
      <form 
        onSubmit={createNutritionData} 
        className="space-y-4 mb-8 relative z-10"
        style={{ zIndex: 10 }} 
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Meal Type</label>
          <input 
            type="text" 
            name="mealType" 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Calories (kcal)</label>
          <input 
            type="number" 
            name="calories" 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          + Add Nutrition Data
        </button>
      </form>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {/* Nutrition Data Table */}
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
            <tr key={data.id} className="odd:bg-white even:bg-gray-100 text-black">
              <td className="py-2 px-4 border-b">{data.date}</td>
              <td className="py-2 px-4 border-b">{data.mealType}</td>
              <td className="py-2 px-4 border-b">{data.calories}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                  onClick={() => deleteNutritionData(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Calories */}
      <div className="mt-4 text-lg font-semibold text-black">
        Total Calories: {nutritionData.reduce((acc, data) => acc + data.calories, 0)} kcal
      </div>
    </section>
  );
};

export default NutritionDataComponent;
