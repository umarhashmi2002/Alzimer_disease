declare const awsconfig: {
  aws_project_region: string;
  aws_cognito_identity_pool_id: string;
  aws_cognito_region: string;
  aws_user_pools_id: string;
  aws_user_pools_web_client_id: string;
  oauth: Record<string, unknown>;
  aws_appsync_graphqlEndpoint: string;
  aws_appsync_region: string;
  aws_appsync_authenticationType: string;
  aws_appsync_apiKey: string;
  aws_dynamodb_all_tables_region: string;
  aws_dynamodb_table_schemas: Array<{
    tableName: string;
    region: string;
  }>;
  Auth: {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
    identityPoolId: string;
    mandatorySignIn: boolean;
    authenticationFlowType: string;
    oauth: {
      domain: string;
      scope: string[];
      redirectSignIn: string;
      redirectSignOut: string;
      responseType: string;
    };
  };
  API: {
    endpoints: Array<{
      name: string;
      endpoint: string;
      region: string;
    }>;
  };
};

export default awsconfig;
