declare const awsconfig: {
  Auth: {
    userPoolId: string;
    userPoolWebClientId: string;
    identityPoolId: string;
    mandatorySignIn: boolean;
    authenticationFlowType: string;
  };
  API: {
    endpoints: Array<{
      name: string;
      endpoint: string;
      region: string;
    }>;
  };
};

export default config;
