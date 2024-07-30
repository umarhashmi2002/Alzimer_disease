// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.d'; // Adjust the path if necessary


// Configure Amplify with the exported configuration
Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));
