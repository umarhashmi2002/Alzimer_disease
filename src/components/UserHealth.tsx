import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UserHealthInfo {
  age: number;
  sex: string;
  weight: number;
  height: number;
  bmi: number;
  healthProblems: string[];
}

interface UserHealthInfoProps {
  onHealthInfoSubmit: (_userHealthInfo: UserHealthInfo) => void;
}

const UserHealthInfoComponent: React.FC<UserHealthInfoProps> = ({ onHealthInfoSubmit }) => {
  const [age, setAge] = useState<string>(''); // Initialize as empty string
  const [sex, setSex] = useState<string>('');
  const [weight, setWeight] = useState<string>(''); // Initialize as empty string
  const [height, setHeight] = useState<string>(''); // Initialize as empty string
  const [healthProblems, setHealthProblems] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const calculateBMI = (weight: number, height: number): number => {
    const heightInMeters = height / 100;
    return +(weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert strings to numbers for calculation
    const ageNum = parseInt(age, 10);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (ageNum > 0 && sex && weightNum > 0 && heightNum > 0) {
      const bmi = calculateBMI(weightNum, heightNum);
      const healthProblemsArray = healthProblems.split(',').map((problem) => problem.trim());

      const userHealthInfo: UserHealthInfo = {
        age: ageNum,
        sex,
        weight: weightNum,
        height: heightNum,
        bmi,
        healthProblems: healthProblemsArray,
      };

      onHealthInfoSubmit(userHealthInfo);

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);

      // Reset the form
      setAge('');
      setSex('');
      setWeight('');
      setHeight('');
      setHealthProblems('');
    } else {
      alert('Please fill out all required fields with valid values');
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 to-cyan-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section 
        className="user-health-info-section p-8 bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          User Health Information
        </motion.h2>

        {formSubmitted && (
          <motion.div 
            className="text-green-500 text-center mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Health information submitted successfully!
          </motion.div>
        )}

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required 
              min="1"
              placeholder="Enter your age"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sex</label>
            <select 
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required 
              min="1"
              step="0.1"
              placeholder="Enter your weight in kilograms"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required 
              min="1"
              step="0.1"
              placeholder="Enter your height in centimeters"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Health Problems</label>
            <textarea 
              value={healthProblems}
              onChange={(e) => setHealthProblems(e.target.value)}
              placeholder="Enter any health problems separated by commas"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Health Information
          </motion.button>
        </motion.form>
      </motion.section>
    </motion.div>
  );
};

export default UserHealthInfoComponent;
