import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-blue-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="nutrition-data-section p-8 bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto"
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
          Nutrition Data Component
        </motion.h1>

        <motion.h2 
          className="text-2xl font-semibold text-center text-gray-700 mb-6"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Nutrition Data
        </motion.h2>
        
        {/* Nutrition Data Form */}
        <motion.form 
          onSubmit={createNutritionData} 
          className="space-y-6 mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Meal Type</label>
            <input 
              type="text" 
              name="mealType" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Calories (kcal)</label>
            <input 
              type="number" 
              name="calories" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            + Add Nutrition Data
          </motion.button>
        </motion.form>

        {error && (
          <motion.div 
            className="text-red-500 text-center mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}

        {/* Nutrition Data Table */}
        <motion.table 
          className="nutrition-data-table w-full border-collapse bg-gray-50 text-left shadow-sm rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <th className="py-3 px-6 border-b">Date</th>
              <th className="py-3 px-6 border-b">Meal Type</th>
              <th className="py-3 px-6 border-b">Calories (kcal)</th>
              <th className="py-3 px-6 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((data) => (
              <tr key={data.id} className="odd:bg-white even:bg-gray-100 text-black">
                <td className="py-3 px-6 border-b">{data.date}</td>
                <td className="py-3 px-6 border-b">{data.mealType}</td>
                <td className="py-3 px-6 border-b">{data.calories}</td>
                <td className="py-3 px-6 border-b">
                  <motion.button 
                    className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
                    onClick={() => deleteNutritionData(data.id)}
                  >
                    Delete
                  </motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>

        {/* Total Calories */}
        <motion.div 
          className="mt-6 text-lg font-semibold text-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Total Calories: {nutritionData.reduce((acc, data) => acc + data.calories, 0)} kcal
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default NutritionDataComponent;
