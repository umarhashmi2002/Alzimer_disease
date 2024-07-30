// amplify/backend.ts
import { auth } from './auth/resource';
import { schema } from './data/resource'; // Ensure this matches the export

import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports.d'; // Adjust the path if necessary

// Configure Amplify with the exported configuration
Amplify.configure(awsconfig);

export const backend = {
  auth,
  data: schema, // Use the correct export name
};
