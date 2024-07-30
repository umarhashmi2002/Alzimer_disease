// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'client' package for createRoot
import App from './App';
import { Amplify } from 'aws-amplify';

// Get the current module's URL
const moduleURL = new URL(import.meta.url);

// Resolve the path of aws-exports.js relative to the module's URL
const awsConfigPath = new URL('./aws-exports.js', moduleURL).pathname;

// Import the actual JavaScript file
import(awsConfigPath).then((awsconfig) => {
    // Configure Amplify with the exported configuration
    Amplify.configure(awsconfig.default);

    // Create the root element and render the App
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
