import React, { useState } from 'react';
import { Authenticator, ThemeProvider, Theme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FitnessDataComponent from './components/FitnessDataComponent';
import NutritionDataComponent from './components/NutritionDataComponent';
import NutritionRecommendationComponent from './components/NutritionRecommendationComponent';
import UserHealthInfoComponent from './components/UserHealth';
import './index.css';
import fitness1 from './assets/fitness1.jpg';
import fitness2 from './assets/fitness2.png';
import fitness3 from './assets/fitness3.jpeg';

interface UserHealthInfo {
  age: number;
  sex: string;
  weight: number;
  height: number;
  bmi: number;
  healthProblems: string[];
}

interface FitnessData {
  id: string;
  date: string;
  workoutType: string;
  duration: number;
}

// Custom theme example
const customTheme: Theme = {
  name: 'custom-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: '#1a1a2e' },
      },
      brand: {
        primary: {
          80: '#ff6b6b',
        },
      },
    },
  },
};

const App: React.FC = () => {
  const [, setUserHealthInfo] = useState<UserHealthInfo | null>(null);
  const [, setFitnessData] = useState<FitnessData[]>([]);

  const handleHealthInfoSubmit = (healthInfo: UserHealthInfo) => {
    setUserHealthInfo(healthInfo);
  };

  const handleFitnessDataSubmit = (newFitnessData: FitnessData[]) => {
    setFitnessData(newFitnessData);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Authenticator>
        {({ signOut }) => (
          <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white">
            {/* Sticky Navbar */}
            <nav className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 shadow-lg">
              <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={fitness1}
                    alt="App Logo"
                    className="w-10 h-10"
                  />
                  <span className="text-2xl font-bold">Fitness & Nutrition App</span>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={signOut}
                    className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center p-8 space-y-12">
              <div className="bg-gray-800 shadow-2xl rounded-lg p-10 max-w-6xl w-full space-y-12">
                
                {/* User Health Info */}
                <div className="flex space-x-8">
                  <div className="w-3/4 p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                    <UserHealthInfoComponent onHealthInfoSubmit={handleHealthInfoSubmit} />
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <img
                      src={fitness3}
                      alt="User Health Info"
                      className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Fitness Data */}
                <div className="flex space-x-8">
                  <div className="w-3/4 p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                    <FitnessDataComponent onFitnessDataSubmit={handleFitnessDataSubmit} />
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <img
                      src={fitness1}
                      alt="Fitness Data"
                      className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Nutrition Data */}
                <div className="flex space-x-8">
                  <div className="w-3/4 p-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
                    <NutritionDataComponent />
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <img
                      src={fitness2}
                      alt="Nutrition Data"
                      className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Nutrition Recommendation */}
                <div className="flex space-x-8">
                  <div className="w-3/4 p-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg">
                    <NutritionRecommendationComponent />
                  </div>
                  <div className="w-1/4 flex items-center justify-center">
                    <img
                      src={fitness3}
                      alt="Nutrition Recommendations"
                      className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="w-full max-w-6xl bg-gray-800 text-gray-400 p-6 rounded-lg text-center shadow-lg">
                <div>
                  <p className="text-lg font-semibold">Contact Us</p>
                  <p>Email: contact@fitnessnutrition.com</p>
                  <p>Phone: +1 234 567 890</p>
                  <p>Address: 123 Fitness Ave, Healthy City, WellState, 45678</p>
                </div>
              </footer>
            </div>
          </div>
        )}
      </Authenticator>
    </ThemeProvider>
  );
};

export default App;
