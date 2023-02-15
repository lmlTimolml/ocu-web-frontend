import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_GLOBALS, GET_CONTACT_PAGE, GET_FRONT_PAGE, GET_SERVICES_PAGE } from "../graphql/queries";

export const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;

export async function getGlobalContent() {

  const { data } = await client.query({
    query: GET_GLOBALS,
  });

  return data;
};

export async function getFrontPageContent() {

  const { data } = await client.query({
    query: GET_FRONT_PAGE,
  });
  
  return data;
  };

export async function getContactPageContent() {

const { data } = await client.query({
  query: GET_CONTACT_PAGE,
});

return data;
};

export async function getServicesPageContent() {

const { data } = await client.query({
  query: GET_SERVICES_PAGE,
});

return data;
};