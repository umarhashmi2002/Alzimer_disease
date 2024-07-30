// amplify/auth/resource.ts
import { Amplify } from 'aws-amplify';

// Get the current module's URL
const moduleURL = new URL(import.meta.url);

// Resolve the path of aws-exports.js relative to the module's URL
const awsConfigPath = new URL('../../src/aws-exports.js', moduleURL).pathname;

// Export a promise that resolves to the auth configuration
export const authPromise = import(awsConfigPath).then((awsconfig) => {
    // Configure Amplify with the exported configuration
    Amplify.configure(awsconfig.default);

    return {
        Auth: {
            region: awsconfig.default.aws_cognito_region,
            userPoolId: awsconfig.default.aws_user_pools_id,
            userPoolWebClientId: awsconfig.default.aws_user_pools_web_client_id,
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
});
