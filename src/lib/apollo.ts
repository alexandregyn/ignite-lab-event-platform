import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obxvv81so401xi0pf1efpu/master',
  cache: new InMemoryCache()
})