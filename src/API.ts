/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFitnessDataInput = {
  id?: string | null,
  userId: string,
  date: string,
  workoutType: string,
  duration: number,
};

export type ModelFitnessDataConditionInput = {
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  workoutType?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  and?: Array< ModelFitnessDataConditionInput | null > | null,
  or?: Array< ModelFitnessDataConditionInput | null > | null,
  not?: ModelFitnessDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type FitnessData = {
  __typename: "FitnessData",
  id: string,
  userId: string,
  date: string,
  workoutType: string,
  duration: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFitnessDataInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  workoutType?: string | null,
  duration?: number | null,
};

export type DeleteFitnessDataInput = {
  id: string,
};

export type CreateNutritionDataInput = {
  id?: string | null,
  userId: string,
  date: string,
  mealType: string,
  calories: number,
};

export type ModelNutritionDataConditionInput = {
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  mealType?: ModelStringInput | null,
  calories?: ModelFloatInput | null,
  and?: Array< ModelNutritionDataConditionInput | null > | null,
  or?: Array< ModelNutritionDataConditionInput | null > | null,
  not?: ModelNutritionDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type NutritionData = {
  __typename: "NutritionData",
  id: string,
  userId: string,
  date: string,
  mealType: string,
  calories: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNutritionDataInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  mealType?: string | null,
  calories?: number | null,
};

export type DeleteNutritionDataInput = {
  id: string,
};

export type CreateNutritionRecommendationInput = {
  id?: string | null,
  userId: string,
  date: string,
  recommendation: string,
};

export type ModelNutritionRecommendationConditionInput = {
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  recommendation?: ModelStringInput | null,
  and?: Array< ModelNutritionRecommendationConditionInput | null > | null,
  or?: Array< ModelNutritionRecommendationConditionInput | null > | null,
  not?: ModelNutritionRecommendationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type NutritionRecommendation = {
  __typename: "NutritionRecommendation",
  id: string,
  userId: string,
  date: string,
  recommendation: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNutritionRecommendationInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  recommendation?: string | null,
};

export type DeleteNutritionRecommendationInput = {
  id: string,
};

export type ModelFitnessDataFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  workoutType?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFitnessDataFilterInput | null > | null,
  or?: Array< ModelFitnessDataFilterInput | null > | null,
  not?: ModelFitnessDataFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFitnessDataConnection = {
  __typename: "ModelFitnessDataConnection",
  items:  Array<FitnessData | null >,
  nextToken?: string | null,
};

export type ModelNutritionDataFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  mealType?: ModelStringInput | null,
  calories?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNutritionDataFilterInput | null > | null,
  or?: Array< ModelNutritionDataFilterInput | null > | null,
  not?: ModelNutritionDataFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelNutritionDataConnection = {
  __typename: "ModelNutritionDataConnection",
  items:  Array<NutritionData | null >,
  nextToken?: string | null,
};

export type ModelNutritionRecommendationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  date?: ModelStringInput | null,
  recommendation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNutritionRecommendationFilterInput | null > | null,
  or?: Array< ModelNutritionRecommendationFilterInput | null > | null,
  not?: ModelNutritionRecommendationFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelNutritionRecommendationConnection = {
  __typename: "ModelNutritionRecommendationConnection",
  items:  Array<NutritionRecommendation | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFitnessDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  workoutType?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFitnessDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionFitnessDataFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionNutritionDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  mealType?: ModelSubscriptionStringInput | null,
  calories?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNutritionDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionNutritionDataFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionNutritionRecommendationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  recommendation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNutritionRecommendationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNutritionRecommendationFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateFitnessDataMutationVariables = {
  input: CreateFitnessDataInput,
  condition?: ModelFitnessDataConditionInput | null,
};

export type CreateFitnessDataMutation = {
  createFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFitnessDataMutationVariables = {
  input: UpdateFitnessDataInput,
  condition?: ModelFitnessDataConditionInput | null,
};

export type UpdateFitnessDataMutation = {
  updateFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFitnessDataMutationVariables = {
  input: DeleteFitnessDataInput,
  condition?: ModelFitnessDataConditionInput | null,
};

export type DeleteFitnessDataMutation = {
  deleteFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNutritionDataMutationVariables = {
  input: CreateNutritionDataInput,
  condition?: ModelNutritionDataConditionInput | null,
};

export type CreateNutritionDataMutation = {
  createNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNutritionDataMutationVariables = {
  input: UpdateNutritionDataInput,
  condition?: ModelNutritionDataConditionInput | null,
};

export type UpdateNutritionDataMutation = {
  updateNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNutritionDataMutationVariables = {
  input: DeleteNutritionDataInput,
  condition?: ModelNutritionDataConditionInput | null,
};

export type DeleteNutritionDataMutation = {
  deleteNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNutritionRecommendationMutationVariables = {
  input: CreateNutritionRecommendationInput,
  condition?: ModelNutritionRecommendationConditionInput | null,
};

export type CreateNutritionRecommendationMutation = {
  createNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNutritionRecommendationMutationVariables = {
  input: UpdateNutritionRecommendationInput,
  condition?: ModelNutritionRecommendationConditionInput | null,
};

export type UpdateNutritionRecommendationMutation = {
  updateNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNutritionRecommendationMutationVariables = {
  input: DeleteNutritionRecommendationInput,
  condition?: ModelNutritionRecommendationConditionInput | null,
};

export type DeleteNutritionRecommendationMutation = {
  deleteNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetFitnessDataQueryVariables = {
  id: string,
};

export type GetFitnessDataQuery = {
  getFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFitnessDataQueryVariables = {
  filter?: ModelFitnessDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFitnessDataQuery = {
  listFitnessData?:  {
    __typename: "ModelFitnessDataConnection",
    items:  Array< {
      __typename: "FitnessData",
      id: string,
      userId: string,
      date: string,
      workoutType: string,
      duration: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNutritionDataQueryVariables = {
  id: string,
};

export type GetNutritionDataQuery = {
  getNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNutritionDataQueryVariables = {
  filter?: ModelNutritionDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutritionDataQuery = {
  listNutritionData?:  {
    __typename: "ModelNutritionDataConnection",
    items:  Array< {
      __typename: "NutritionData",
      id: string,
      userId: string,
      date: string,
      mealType: string,
      calories: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNutritionRecommendationQueryVariables = {
  id: string,
};

export type GetNutritionRecommendationQuery = {
  getNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNutritionRecommendationsQueryVariables = {
  filter?: ModelNutritionRecommendationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNutritionRecommendationsQuery = {
  listNutritionRecommendations?:  {
    __typename: "ModelNutritionRecommendationConnection",
    items:  Array< {
      __typename: "NutritionRecommendation",
      id: string,
      userId: string,
      date: string,
      recommendation: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFitnessDataSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateFitnessDataSubscription = {
  onCreateFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFitnessDataSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFitnessDataSubscription = {
  onUpdateFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFitnessDataSubscriptionVariables = {
  filter?: ModelSubscriptionFitnessDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFitnessDataSubscription = {
  onDeleteFitnessData?:  {
    __typename: "FitnessData",
    id: string,
    userId: string,
    date: string,
    workoutType: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNutritionDataSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateNutritionDataSubscription = {
  onCreateNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNutritionDataSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNutritionDataSubscription = {
  onUpdateNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNutritionDataSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNutritionDataSubscription = {
  onDeleteNutritionData?:  {
    __typename: "NutritionData",
    id: string,
    userId: string,
    date: string,
    mealType: string,
    calories: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNutritionRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionRecommendationFilterInput | null,
  owner?: string | null,
};

export type OnCreateNutritionRecommendationSubscription = {
  onCreateNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNutritionRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionRecommendationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNutritionRecommendationSubscription = {
  onUpdateNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNutritionRecommendationSubscriptionVariables = {
  filter?: ModelSubscriptionNutritionRecommendationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNutritionRecommendationSubscription = {
  onDeleteNutritionRecommendation?:  {
    __typename: "NutritionRecommendation",
    id: string,
    userId: string,
    date: string,
    recommendation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
