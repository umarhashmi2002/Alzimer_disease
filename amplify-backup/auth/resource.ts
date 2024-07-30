import { Amplify } from 'aws-amplify';

const moduleURL = new URL(import.meta.url);
const awsConfigPath = new URL('../../src/aws-exports.js', moduleURL).pathname;

export const authPromise = import(awsConfigPath).then((awsconfig) => {
  Amplify.configure(awsconfig.default);

  return {
    Auth: {
      region: awsconfig.default.Auth.region,
      userPoolId: awsconfig.default.Auth.userPoolId,
      userPoolWebClientId: awsconfig.default.Auth.userPoolWebClientId,
      mandatorySignIn: true,
      authenticationFlowType: 'USER_SRP_AUTH',
      signUpVerificationMethod: 'code',
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
});
