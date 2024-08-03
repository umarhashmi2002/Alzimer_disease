import React, { useState } from 'react';

interface FitnessData {
  id: string;
  date: string;
  workoutType: string;
  duration: number;
}

interface FitnessDataComponentProps {
  onFitnessDataSubmit: (fitnessData: FitnessData[]) => void;
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
    <section className="fitness-data-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Fitness Data Component</h1> {/* New Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Fitness Data</h2>

      {/* Fitness Data Form */}
      <form 
        onSubmit={createFitnessData} 
        className="space-y-4 mb-8 relative z-10" // Ensure form inputs are on top layer
        style={{ zIndex: 10 }} // Inline style as an additional check
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Workout Type</label>
          <input 
            type="text" 
            name="workoutType" 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
          <input 
            type="number" 
            name="duration" 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          + Add Fitness Data
        </button>
      </form>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {/* Fitness Data Table */}
      <table className="fitness-data-table w-full border-collapse bg-gray-50 text-left shadow-sm">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Workout Type</th>
            <th className="py-2 px-4 border-b">Duration (mins)</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fitnessData.map((data) => (
            <tr key={data.id} className="odd:bg-white even:bg-gray-100 text-black">
              <td className="py-2 px-4 border-b">{data.date}</td>
              <td className="py-2 px-4 border-b">{data.workoutType}</td>
              <td className="py-2 px-4 border-b">{data.duration}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                  onClick={() => deleteFitnessData(data.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Exercise Time */}
      <div className="mt-4 text-lg font-semibold text-black">
        Total Exercise Time: {fitnessData.reduce((acc, data) => acc + data.duration, 0)} minutes
      </div>
    </section>
  );
};

export default FitnessDataComponent;
