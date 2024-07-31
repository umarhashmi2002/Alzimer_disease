/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFitnessData = /* GraphQL */ `subscription OnCreateFitnessData(
  $filter: ModelSubscriptionFitnessDataFilterInput
  $owner: String
) {
  onCreateFitnessData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFitnessDataSubscriptionVariables,
  APITypes.OnCreateFitnessDataSubscription
>;
export const onUpdateFitnessData = /* GraphQL */ `subscription OnUpdateFitnessData(
  $filter: ModelSubscriptionFitnessDataFilterInput
  $owner: String
) {
  onUpdateFitnessData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFitnessDataSubscriptionVariables,
  APITypes.OnUpdateFitnessDataSubscription
>;
export const onDeleteFitnessData = /* GraphQL */ `subscription OnDeleteFitnessData(
  $filter: ModelSubscriptionFitnessDataFilterInput
  $owner: String
) {
  onDeleteFitnessData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFitnessDataSubscriptionVariables,
  APITypes.OnDeleteFitnessDataSubscription
>;
export const onCreateNutritionData = /* GraphQL */ `subscription OnCreateNutritionData(
  $filter: ModelSubscriptionNutritionDataFilterInput
  $owner: String
) {
  onCreateNutritionData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNutritionDataSubscriptionVariables,
  APITypes.OnCreateNutritionDataSubscription
>;
export const onUpdateNutritionData = /* GraphQL */ `subscription OnUpdateNutritionData(
  $filter: ModelSubscriptionNutritionDataFilterInput
  $owner: String
) {
  onUpdateNutritionData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNutritionDataSubscriptionVariables,
  APITypes.OnUpdateNutritionDataSubscription
>;
export const onDeleteNutritionData = /* GraphQL */ `subscription OnDeleteNutritionData(
  $filter: ModelSubscriptionNutritionDataFilterInput
  $owner: String
) {
  onDeleteNutritionData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNutritionDataSubscriptionVariables,
  APITypes.OnDeleteNutritionDataSubscription
>;
export const onCreateNutritionRecommendation = /* GraphQL */ `subscription OnCreateNutritionRecommendation(
  $filter: ModelSubscriptionNutritionRecommendationFilterInput
  $owner: String
) {
  onCreateNutritionRecommendation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNutritionRecommendationSubscriptionVariables,
  APITypes.OnCreateNutritionRecommendationSubscription
>;
export const onUpdateNutritionRecommendation = /* GraphQL */ `subscription OnUpdateNutritionRecommendation(
  $filter: ModelSubscriptionNutritionRecommendationFilterInput
  $owner: String
) {
  onUpdateNutritionRecommendation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNutritionRecommendationSubscriptionVariables,
  APITypes.OnUpdateNutritionRecommendationSubscription
>;
export const onDeleteNutritionRecommendation = /* GraphQL */ `subscription OnDeleteNutritionRecommendation(
  $filter: ModelSubscriptionNutritionRecommendationFilterInput
  $owner: String
) {
  onDeleteNutritionRecommendation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNutritionRecommendationSubscriptionVariables,
  APITypes.OnDeleteNutritionRecommendationSubscription
>;
