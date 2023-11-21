import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Question: a.model({
    text: a.string().required(),
    answers: a.string().required().array(),
    correctAnswer: a.string().required(),
  }).authorization([a.allow.owner(), a.allow.public().to(['read'])])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

