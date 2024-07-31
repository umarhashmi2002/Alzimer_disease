/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFitnessData = /* GraphQL */ `query GetFitnessData($id: ID!) {
  getFitnessData(id: $id) {
    id
    userId
    date
    workoutType
    duration
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFitnessDataQueryVariables,
  APITypes.GetFitnessDataQuery
>;
export const listFitnessData = /* GraphQL */ `query ListFitnessData(
  $filter: ModelFitnessDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listFitnessData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      date
      workoutType
      duration
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFitnessDataQueryVariables,
  APITypes.ListFitnessDataQuery
>;
export const getNutritionData = /* GraphQL */ `query GetNutritionData($id: ID!) {
  getNutritionData(id: $id) {
    id
    userId
    date
    mealType
    calories
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNutritionDataQueryVariables,
  APITypes.GetNutritionDataQuery
>;
export const listNutritionData = /* GraphQL */ `query ListNutritionData(
  $filter: ModelNutritionDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listNutritionData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      date
      mealType
      calories
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNutritionDataQueryVariables,
  APITypes.ListNutritionDataQuery
>;
export const getNutritionRecommendation = /* GraphQL */ `query GetNutritionRecommendation($id: ID!) {
  getNutritionRecommendation(id: $id) {
    id
    userId
    date
    recommendation
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNutritionRecommendationQueryVariables,
  APITypes.GetNutritionRecommendationQuery
>;
export const listNutritionRecommendations = /* GraphQL */ `query ListNutritionRecommendations(
  $filter: ModelNutritionRecommendationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNutritionRecommendations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      date
      recommendation
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNutritionRecommendationsQueryVariables,
  APITypes.ListNutritionRecommendationsQuery
>;
