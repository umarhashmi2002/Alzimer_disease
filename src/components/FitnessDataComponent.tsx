import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FitnessData {
  id: string;
  date: string;
  workoutType: string;
  duration: number;
}

interface FitnessDataComponentProps {
  onFitnessDataSubmit: (_fitnessData: FitnessData[]) => void;
}

const FitnessDataComponent: React.FC<FitnessDataComponentProps> = ({ onFitnessDataSubmit }) => {
  const [fitnessData, setFitnessData] = useState<FitnessData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const createFitnessData = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const workoutType = form.workoutType.value;
    const duration = parseFloat(form.duration.value);

    const newData: FitnessData = {
      id: Date.now().toString(), // Simple ID generation based on timestamp
      date: new Date().toISOString().split('T')[0],
      workoutType,
      duration,
    };

    setFitnessData([...fitnessData, newData]);
    onFitnessDataSubmit([...fitnessData, newData]);
    form.reset(); // Clear form inputs after submission
  };

  const deleteFitnessData = async (id: string) => {
    try {
      const updatedFitnessData = fitnessData.filter((data) => data.id !== id);
      setFitnessData(updatedFitnessData);
      onFitnessDataSubmit(updatedFitnessData);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="fitness-data-section p-8 bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Fitness Data Component
        </motion.h1>

        <motion.h2 
          className="text-2xl font-semibold text-center text-gray-700 mb-6"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Log Your Workout
        </motion.h2>
        
        {/* Fitness Data Form */}
        <motion.form 
          onSubmit={createFitnessData} 
          className="space-y-6 mb-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Workout Type</label>
            <input 
              type="text" 
              name="workoutType" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
            <input 
              type="number" 
              name="duration" 
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            + Add Fitness Data
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

        {/* Fitness Data Table */}
        <motion.table 
          className="fitness-data-table w-full border-collapse bg-gray-50 text-left shadow-sm rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <th className="py-3 px-6 border-b">Date</th>
              <th className="py-3 px-6 border-b">Workout Type</th>
              <th className="py-3 px-6 border-b">Duration (mins)</th>
              <th className="py-3 px-6 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fitnessData.map((data) => (
              <tr key={data.id} className="odd:bg-white even:bg-gray-100 text-black">
                <td className="py-3 px-6 border-b">{data.date}</td>
                <td className="py-3 px-6 border-b">{data.workoutType}</td>
                <td className="py-3 px-6 border-b">{data.duration}</td>
                <td className="py-3 px-6 border-b">
                  <motion.button 
                    className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
                    onClick={() => deleteFitnessData(data.id)}
                  >
                    Delete
                  </motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>

        {/* Total Exercise Time */}
        <motion.div 
          className="mt-6 text-lg font-semibold text-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Total Exercise Time: {fitnessData.reduce((acc, data) => acc + data.duration, 0)} minutes
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default FitnessDataComponent;
