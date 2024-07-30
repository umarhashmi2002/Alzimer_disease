import React, { useEffect, useState } from 'react';

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
    <section>
      <h2>Fitness Data</h2>
      <button onClick={createFitnessData}>+ Add Fitness Data</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {fitnessData.map((data) => (
          <li key={data.id}>
            {data.date}: {data.workoutType} - {data.duration} mins
            <button onClick={() => deleteFitnessData(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FitnessDataComponent;