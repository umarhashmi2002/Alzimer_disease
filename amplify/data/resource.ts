import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== FITNESS AND NUTRITION SCHEMA ===========================================
The section below creates two database tables: FitnessData and NutritionData.
Each table has fields relevant to their respective purposes. The authorization
rule specifies that only the owner of the data can create, read, update, and
delete records.
=========================================================================*/
const schema = a.schema({
  FitnessData: a
    .model({
      userId: a.string(),
      date: a.date(),
      workoutType: a.string(),
      duration: a.float(),
    })
    .authorization((allow) => [allow.owner()]),

  NutritionData: a
    .model({
      userId: a.string(),
      date: a.date(),
      mealType: a.string(),
      calories: a.float(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  }, 
});
