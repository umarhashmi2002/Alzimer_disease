import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const client = generateClient<Schema>();

function App() {
  const [fitnessData, setFitnessData] = useState<Array<Schema["FitnessData"]["type"]>>([]);
  const [nutritionData, setNutritionData] = useState<Array<Schema["NutritionData"]["type"]>>([]);

  useEffect(() => {
    const fitnessSubscription = client.models.FitnessData.observeQuery().subscribe({
      next: (data) => setFitnessData([...data.items]),
    });

    const nutritionSubscription = client.models.NutritionData.observeQuery().subscribe({
      next: (data) => setNutritionData([...data.items]),
    });

    return () => {
      fitnessSubscription.unsubscribe();
      nutritionSubscription.unsubscribe();
    };
  }, []);

  function createFitnessData() {
    const workoutType = window.prompt("Workout type");
    const duration = parseFloat(window.prompt("Duration in minutes") || "0");
    client.models.FitnessData.create({ 
      userId: "currentUserId", // Replace with the actual user ID
      date: new Date().toISOString().split('T')[0], 
      workoutType, 
      duration 
    });
  }

  function createNutritionData() {
    const mealType = window.prompt("Meal type");
    const calories = parseFloat(window.prompt("Calories") || "0");
    client.models.NutritionData.create({ 
      userId: "currentUserId", // Replace with the actual user ID
      date: new Date().toISOString().split('T')[0], 
      mealType, 
      calories 
    });
  }

  function deleteFitnessData(id: string) {
    client.models.FitnessData.delete({ id });
  }

  function deleteNutritionData(id: string) {
    client.models.NutritionData.delete({ id });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>{user?.username}'s Fitness and Nutrition Data</h1>

          <section>
            <h2>Fitness Data</h2>
            <button onClick={createFitnessData}>+ Add Fitness Data</button>
            <ul>
              {fitnessData.map((data) => (
                <li key={data.id} onClick={() => deleteFitnessData(data.id)}>
                  {data.date}: {data.workoutType} - {data.duration} mins
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Nutrition Data</h2>
            <button onClick={createNutritionData}>+ Add Nutrition Data</button>
            <ul>
              {nutritionData.map((data) => (
                <li key={data.id} onClick={() => deleteNutritionData(data.id)}>
                  {data.date}: {data.mealType} - {data.calories} kcal
                </li>
              ))}
            </ul>
          </section>

          <div>
            🥳 App successfully hosted. Try creating new fitness or nutrition data.
            <br />
            <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
              Review the next step of this tutorial.
            </a>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
