import React, { useState } from 'react';

interface UserHealthInfo {
  age: number;
  sex: string;
  weight: number;
  height: number;
  bmi: number;
  healthProblems: string[];
}

interface UserHealthInfoProps {
  onHealthInfoSubmit: (userHealthInfo: UserHealthInfo) => void;
}

const UserHealthInfoComponent: React.FC<UserHealthInfoProps> = ({ onHealthInfoSubmit }) => {
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [healthProblems, setHealthProblems] = useState<string>('');

  const calculateBMI = (weight: number, height: number): number => {
    const heightInMeters = height / 100;
    return +(weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled out
    if (age > 0 && sex && weight > 0 && height > 0) {
      const bmi = calculateBMI(weight, height);
      const healthProblemsArray = healthProblems.split(',').map((problem) => problem.trim());

      const userHealthInfo: UserHealthInfo = {
        age,
        sex,
        weight,
        height,
        bmi,
        healthProblems: healthProblemsArray,
      };

      // Call the parent component's submission handler
      onHealthInfoSubmit(userHealthInfo);

      // Optional: Reset the form after submission
      setAge(0);
      setSex('');
      setWeight(0);
      setHeight(0);
      setHealthProblems('');
    } else {
      alert('Please fill out all required fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold text-center mb-4">User Health Information</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input 
          type="number" 
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          required 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Sex</label>
        <select 
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
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
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          required 
          step="0.1"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
        <input 
          type="number" 
          value={height}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          required 
          step="0.1"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Health Problems</label>
        <textarea 
          value={healthProblems}
          onChange={(e) => setHealthProblems(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Submit Health Information
      </button>
    </form>
  );
};

export default UserHealthInfoComponent;
