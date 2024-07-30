// src/types/amplify-config.d.ts
interface OAuthConfig {
  domain: string;
  scope: string[];
  redirectSignIn: string;
  redirectSignOut: string;
  responseType: string;
}

interface AuthConfig {
  region: string;
  userPoolId: string;
  userPoolWebClientId: string;
  identityPoolId: string;
  mandatorySignIn: boolean;
  authenticationFlowType: string;
  oauth: OAuthConfig;
}

interface APIEndpoint {
  name: string;
  endpoint: string;
  region: string;
}

interface APIConfig {
  endpoints: APIEndpoint[];
}

interface AmplifyConfig {
  Auth: AuthConfig;
  API: APIConfig;
}

declare module 'aws-exports' {
  const awsconfig: AmplifyConfig;
  export default awsconfig;
}
