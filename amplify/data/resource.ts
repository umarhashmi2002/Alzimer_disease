// amplify/data/resource.ts
import { a, ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  FitnessData: a.model({
    userId: a.string(),
    date: a.date(),
    workoutType: a.string(),
    duration: a.float(),
  }).authorization((allow: ClientSchema<typeof schema>): ClientSchema<typeof schema>[] => [allow.owner() as ClientSchema<typeof schema>]),

  NutritionData: a.model({
    userId: a.string(),
    date: a.date(),
    mealType: a.string(),
    calories: a.float(),
  }).authorization((allow: ClientSchema<typeof schema>) => [allow.owner()]),

  NutritionRecommendation: a.model({
    userId: a.string(),
    date: a.date(),
    recommendation: a.string(),
  }).authorization((allow: ClientSchema<typeof schema>) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export { schema };
