// src/App.tsx
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FitnessDataComponent from './components/FitnessDataComponent';
import NutritionDataComponent from './components/NutritionDataComponent';
import NutritionRecommendationComponent from './components/NutritionRecommendationComponent';

const App: React.FC = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>{user?.username}'s Fitness and Nutrition Data</h1>
          <FitnessDataComponent />
          <NutritionDataComponent />
          <NutritionRecommendationComponent />
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
};

export default App;
