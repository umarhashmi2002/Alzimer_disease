// amplify/backend.ts
import { schema } from './data/resource'; // Ensure this matches the export

import { Amplify } from 'aws-amplify';
import { authPromise } from './auth/resource';

// Get the current module's URL
const moduleURL = new URL(import.meta.url);

// Resolve the path of aws-exports.js relative to the module's URL
const awsConfigPath = new URL('../src/aws-exports.js', moduleURL).pathname;

// Export a promise that resolves to the backend configuration
export const backendPromise = import(awsConfigPath).then((awsconfig) => {
    // Configure Amplify with the exported configuration
    Amplify.configure(awsconfig.default);

    return authPromise.then((auth) => ({
        auth,
        data: schema, // Use the correct export name
    }));
});
