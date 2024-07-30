// src/aws-exports.js
const awsconfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id: 'us-east-1:xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_xxxxxx',
  aws_user_pools_web_client_id: 'xxxxxxxxxxxxxxxxxxxxxx',
  oauth: {},
  aws_cloud_logic_custom: [
    {
      name: 'myApi',
      endpoint: 'https://xxxxxx.execute-api.us-east-1.amazonaws.com/dev',
      region: 'us-east-1',
    },
  ],
  aws_appsync_graphqlEndpoint: 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_user_files_s3_bucket: 'mybucket',
  aws_user_files_s3_bucket_region: 'us-east-1',
};

export default awsconfig;
