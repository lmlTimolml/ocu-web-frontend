import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_GLOBALS, GET_CONTACT_PAGE, GET_FRONT_PAGE, GET_SERVICES_PAGE } from "../graphql/queries";


// CLIENT SET UP FOR FETCHING DATA FROM STRAPI VIA GRAPHQL
export const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;

// Fetch data from graphql, queries are stored in separate file "../graphql/queries"


// HEADER & FOOTER CONTENT

export async function getGlobalContent() {

  const { data, loading, error } = await client.query({
    query: GET_GLOBALS,
  });

if (loading) return <p>Content loading</p>
if (error) return <p>Error: {error.message} </p>

  return data;
};


// HOMEPAGE

export async function getFrontPageContent() {

  const { data, loading, error } = await client.query({
    query: GET_FRONT_PAGE,
  });

if (loading) return <p>Content loading</p>
if (error) return <p>Error: {error.message} </p>

  return data;
  };


// CONTACT PAGE
export async function getContactPageContent() {

const { data, loading, error } = await client.query({
  query: GET_CONTACT_PAGE,
});

if (loading) return <p>Content loading</p>
if (error) return <p>Error: {error.message} </p>

return data;
};

// SERVICES PAGE
export async function getServicesPageContent() {

const { data, loading, error } = await client.query({
  query: GET_SERVICES_PAGE,
});

if (loading) return <p>Content loading</p>
if (error) return <p>Error: {error.message} </p>

return data;
};