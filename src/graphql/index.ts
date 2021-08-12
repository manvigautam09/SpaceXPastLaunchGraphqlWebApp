import { GraphQLClient } from 'graphql-request';

const endpoint: string = 'https://api.spacex.land/graphql/';
const graphQLClient = new GraphQLClient(endpoint);

export async function mutationOrQueryProvider(
  queryOrMutationToFetch: string,
  variables?: any
) {
  try {
    const data = await graphQLClient.request(queryOrMutationToFetch, variables);
    return data;
  } catch (error) {
    throw error;
  }
}
