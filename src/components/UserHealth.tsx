//code for the UserHealth component
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
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold text-center mb-4">User Health Information</h2>
      {formSubmitted && (
        <div className="text-green-500 text-center mb-4">
          Health information submitted successfully!
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input 
          type="number" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required 
          min="1"
          placeholder="Enter your age"
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
          onChange={(e) => setWeight(e.target.value)}
          required 
          min="1"
          step="0.1"
          placeholder="Enter your weight in kilograms"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
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
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Health Problems</label>
        <textarea 
          value={healthProblems}
          onChange={(e) => setHealthProblems(e.target.value)}
          placeholder="Enter any health problems separated by commas"
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
