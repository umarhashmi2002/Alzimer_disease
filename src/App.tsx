import React, { useState } from 'react';
import { Authenticator, ThemeProvider, Theme, View } from '@aws-amplify/ui-react';
import { motion } from 'framer-motion';
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

// Custom theme for the Sign In/Sign Out components
const signInOutTheme: Theme = {
  name: 'signInOutTheme',
  tokens: {
    colors: {
      background: {
        primary: { value: '#f0f4f8' },
      },
      font: {
        primary: { value: '#333' },
      },
      brand: {
        primary: {
          80: '#00aaff',
        },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: '#00aaff' },
          color: { value: '#ffffff' },
          _hover: {
            backgroundColor: { value: '#0088cc' },
          },
        },
      },
    },
  },
};

// Original theme for the rest of the app
const appTheme: Theme = {
  name: 'appTheme',
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
      font: {
        primary: { value: '#ffffff' },
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
    <Authenticator>
      {({ signOut, user }) =>
        user ? (
          <ThemeProvider theme={appTheme}>
            <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white">
              {/* Sticky Navbar */}
              <motion.nav
                className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 shadow-lg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <img src={fitness1} alt="App Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg" />
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">Fitness & Nutrition App</span>
                  </motion.div>
                  <motion.div
                    className="space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.button
                      onClick={signOut}
                      className="bg-blue-500 text-white text-sm sm:text-lg font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign out
                    </motion.button>
                  </motion.div>
                </div>
              </motion.nav>

              {/* Main Content */}
              <motion.div
                className="flex flex-col items-center p-6 sm:p-10 space-y-12 sm:space-y-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.div
                  className="bg-gray-800 shadow-2xl rounded-lg p-6 sm:p-12 max-w-full lg:max-w-7xl w-full space-y-12 sm:space-y-16"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {/* User Health Info */}
                  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12">
                    <motion.div
                      className="sm:w-3/4 w-full p-6 sm:p-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <UserHealthInfoComponent onHealthInfoSubmit={handleHealthInfoSubmit} />
                    </motion.div>
                    <motion.div
                      className="sm:w-1/4 w-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    >
                      <motion.img
                        src={fitness3}
                        alt="User Health Info"
                        className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 w-full sm:w-auto"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Fitness Data */}
                  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12">
                    <motion.div
                      className="sm:w-3/4 w-full p-6 sm:p-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <FitnessDataComponent onFitnessDataSubmit={handleFitnessDataSubmit} />
                    </motion.div>
                    <motion.div
                      className="sm:w-1/4 w-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    >
                      <motion.img
                        src={fitness1}
                        alt="Fitness Data"
                        className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 w-full sm:w-auto"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Nutrition Data */}
                  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12">
                    <motion.div
                      className="sm:w-3/4 w-full p-6 sm:p-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <NutritionDataComponent />
                    </motion.div>
                    <motion.div
                      className="sm:w-1/4 w-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    >
                      <motion.img
                        src={fitness2}
                        alt="Nutrition Data"
                        className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 w-full sm:w-auto"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Nutrition Recommendation */}
                  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12">
                    <motion.div
                      className="sm:w-3/4 w-full p-6 sm:p-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <NutritionRecommendationComponent />
                    </motion.div>
                    <motion.div
                      className="sm:w-1/4 w-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                    >
                      <motion.img
                        src={fitness3}
                        alt="Nutrition Recommendations"
                        className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 w-full sm:w-auto"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                  className="w-full max-w-7xl bg-gray-800 text-gray-400 p-8 rounded-lg text-center shadow-lg"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Contact Us</p>
                    <p>Email: contact@fitnessnutrition.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Fitness Ave, Healthy City, WellState, 45678</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </motion.footer>
              </motion.div>
            </div>
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={signInOutTheme}>
            <View>
              <Authenticator />
            </View>
          </ThemeProvider>
        )
      }
    </Authenticator>
  );
};

export default App;
