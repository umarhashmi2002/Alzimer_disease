import { Amplify } from 'aws-amplify';
import awsconfig from '../../src/aws-exports'; // Adjusted path

Amplify.configure(awsconfig);

export const backend = {
  auth: {
    Auth: {
      userPoolId: awsconfig.aws_user_pools_id,
      userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
      identityPoolId: awsconfig.aws_cognito_identity_pool_id,
      mandatorySignIn: true,
      authenticationFlowType: 'USER_SRP_AUTH',
    },
  },
  api: {
    API: awsconfig.aws_appsync_graphqlEndpoint,
  },
};
