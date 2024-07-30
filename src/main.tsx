import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';

const moduleURL = new URL(import.meta.url);
const awsConfigPath = new URL('./aws-exports.js', moduleURL).pathname;

import(awsConfigPath).then((awsconfig) => {
  console.log('AWS Config:', awsconfig.default); // Log the configuration
  Amplify.configure(awsconfig.default);

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}).catch((error) => {
  console.error('Error loading AWS Config:', error); // Log any errors
});
