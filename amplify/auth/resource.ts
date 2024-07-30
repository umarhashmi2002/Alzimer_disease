// amplify/auth/resource.ts
import { Amplify } from 'aws-amplify';
import awsconfig from '../../src/aws-exports.d'; // Adjust the path if necessary

// Configure Amplify with the exported configuration
Amplify.configure(awsconfig);

export const auth = {
  Auth: {
    region: awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
    mandatorySignIn: true,
    authenticationFlowType: 'USER_SRP_AUTH',
    signUpVerificationMethod: 'code', // Use 'code' for email verification
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
    ],
  },
};
