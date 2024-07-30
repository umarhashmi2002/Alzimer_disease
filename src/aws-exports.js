
const awsconfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_3DT06CGeX',
    userPoolWebClientId: '2f5km20kqd384qfq6mdja7q3e5',
    identityPoolId: 'us-east-1:fbb405c2-43a5-4cd8-af56-d4a88b075e6b',
    mandatorySignIn: true,
    authenticationFlowType: 'USER_SRP_AUTH',
    oauth: {
      domain: 'fitness.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'http://localhost:5173/',
      redirectSignOut: 'http://localhost:5173/',
      responseType: 'code' // or 'token' based on your configuration
    }
  },
  API: {
    endpoints: [
      {
        name: 'GraphQL',
        endpoint: 'https://aimtngr7hbcwpp7blalkcrtrja.appsync-api.us-east-1.amazonaws.com/graphql',
        region: 'us-east-1'
      }
    ]
  }
};

export default awsconfig;
