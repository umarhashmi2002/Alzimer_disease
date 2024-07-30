import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js'; // Import the actual JavaScript file
import { schema } from './data/resource'; // Ensure this matches the export
// import { AmplifyConfig } from '../src/types/amplify-config'; // Correctly import the type

// Correctly configure Amplify with the exported configuration
Amplify.configure(awsconfig);

export const backend = {
  auth: {
    Auth: {
      userPoolId: awsconfig.Auth.userPoolId,
      userPoolWebClientId: awsconfig.Auth.userPoolWebClientId,
      identityPoolId: awsconfig.Auth.identityPoolId,
      mandatorySignIn: awsconfig.Auth.mandatorySignIn,
      authenticationFlowType: awsconfig.Auth.authenticationFlowType,
    },
  },
  api: {
    API: awsconfig.API, // Use the correct export name
  },
  data: schema, // Ensure this matches the export
};
