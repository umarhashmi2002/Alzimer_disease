/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFitnessData = /* GraphQL */ `mutation CreateFitnessData(
  $input: CreateFitnessDataInput!
  $condition: ModelFitnessDataConditionInput
) {
  createFitnessData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFitnessDataMutationVariables,
  APITypes.CreateFitnessDataMutation
>;
export const updateFitnessData = /* GraphQL */ `mutation UpdateFitnessData(
  $input: UpdateFitnessDataInput!
  $condition: ModelFitnessDataConditionInput
) {
  updateFitnessData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFitnessDataMutationVariables,
  APITypes.UpdateFitnessDataMutation
>;
export const deleteFitnessData = /* GraphQL */ `mutation DeleteFitnessData(
  $input: DeleteFitnessDataInput!
  $condition: ModelFitnessDataConditionInput
) {
  deleteFitnessData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFitnessDataMutationVariables,
  APITypes.DeleteFitnessDataMutation
>;
export const createNutritionData = /* GraphQL */ `mutation CreateNutritionData(
  $input: CreateNutritionDataInput!
  $condition: ModelNutritionDataConditionInput
) {
  createNutritionData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNutritionDataMutationVariables,
  APITypes.CreateNutritionDataMutation
>;
export const updateNutritionData = /* GraphQL */ `mutation UpdateNutritionData(
  $input: UpdateNutritionDataInput!
  $condition: ModelNutritionDataConditionInput
) {
  updateNutritionData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNutritionDataMutationVariables,
  APITypes.UpdateNutritionDataMutation
>;
export const deleteNutritionData = /* GraphQL */ `mutation DeleteNutritionData(
  $input: DeleteNutritionDataInput!
  $condition: ModelNutritionDataConditionInput
) {
  deleteNutritionData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNutritionDataMutationVariables,
  APITypes.DeleteNutritionDataMutation
>;
export const createNutritionRecommendation = /* GraphQL */ `mutation CreateNutritionRecommendation(
  $input: CreateNutritionRecommendationInput!
  $condition: ModelNutritionRecommendationConditionInput
) {
  createNutritionRecommendation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNutritionRecommendationMutationVariables,
  APITypes.CreateNutritionRecommendationMutation
>;
export const updateNutritionRecommendation = /* GraphQL */ `mutation UpdateNutritionRecommendation(
  $input: UpdateNutritionRecommendationInput!
  $condition: ModelNutritionRecommendationConditionInput
) {
  updateNutritionRecommendation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNutritionRecommendationMutationVariables,
  APITypes.UpdateNutritionRecommendationMutation
>;
export const deleteNutritionRecommendation = /* GraphQL */ `mutation DeleteNutritionRecommendation(
  $input: DeleteNutritionRecommendationInput!
  $condition: ModelNutritionRecommendationConditionInput
) {
  deleteNutritionRecommendation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNutritionRecommendationMutationVariables,
  APITypes.DeleteNutritionRecommendationMutation
>;
