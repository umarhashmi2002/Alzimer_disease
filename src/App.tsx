// src/App.tsx
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FitnessDataComponent from './components/FitnessDataComponent';
import NutritionDataComponent from './components/NutritionDataComponent';
import NutritionRecommendationComponent from './components/NutritionRecommendationComponent';
import './index.css'; // Assuming you're adding the styles to your index.css or App.css

const App: React.FC = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {user?.username}'s Fitness and Nutrition Data
            </h1>
            <div className="space-y-6">
              <FitnessDataComponent />
              <NutritionDataComponent />
              <NutritionRecommendationComponent />
            </div>
            <div className="mt-8 bg-green-100 text-green-800 p-4 rounded-md">
              <span role="img" aria-label="celebration" className="text-2xl">
                🥳
              </span>{' '}
              <span className="font-semibold">App successfully hosted.</span> Try creating new
              fitness or nutrition data.
              <br />
              <a
                href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates"
                className="text-blue-500 underline mt-2 inline-block"
              >
                Review the next step of this tutorial.
              </a>
            </div>
            <button
              onClick={signOut}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Sign out
            </button>
          </div>
        </main>
      )}
    </Authenticator>
  );
};

export default App;
