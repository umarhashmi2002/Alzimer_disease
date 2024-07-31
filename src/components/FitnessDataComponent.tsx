import React, { useEffect, useState } from 'react';
import '../index.css'; // Ensure Tailwind CSS is properly set up

interface FitnessData {
  id: string;
  userId: string;
  date: string;
  workoutType: string;
  duration: number;
}

const FitnessDataComponent: React.FC = () => {
  const [fitnessData, setFitnessData] = useState<FitnessData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFitnessData = async () => {
      try {
        const dataItems: FitnessData[] = []; // Mocked data fetching
        setFitnessData(dataItems);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchFitnessData();
  }, []);

  const createFitnessData = async () => {
    const workoutType = window.prompt('Workout type');
    const duration = parseFloat(window.prompt('Duration in minutes') || '0');
    try {
      const newData: FitnessData = {
        id: 'newId', // Replace with actual ID generation logic
        userId: 'currentUserId', // Replace with the actual user ID
        date: new Date().toISOString().split('T')[0],
        workoutType: workoutType || '',
        duration,
      };
      setFitnessData([...fitnessData, newData]);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const deleteFitnessData = async (id: string) => {
    try {
      setFitnessData(fitnessData.filter((data) => data.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <section className="fitness-data-section p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Fitness Data</h2>
      <button 
        className="w-full bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600 transition-colors"
        onClick={createFitnessData}>
        + Add Fitness Data
      </button>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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
            <tr key={data.id} className="odd:bg-white even:bg-gray-100">
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
    </section>
  );
};

export default FitnessDataComponent;
