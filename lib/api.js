import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_GLOBALS, GET_CONTACT_PAGE, GET_FRONT_PAGE, SERVICE_STRAT, SERVICE_MARTECH, SERVICE_CLIENT, SERVICE_ANALYTICS } from "../graphql/queries";


// CLIENT SET UP FOR FETCHING DATA FROM STRAPI VIA GRAPHQL
export const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
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

// UNDERSIDER
// Strategi og Rådgivning
export async function getServicesOne() {

const { data, loading, error } = await client.query({
  query: SERVICE_STRAT,
});

if (loading) return <p>Content loading</p>
if (error) return <p>Error: {error.message} </p>

return data;
};

// Martech
export async function getServicesTwo() {

  const { data, loading, error } = await client.query({
    query: SERVICE_MARTECH,
  });
  
  if (loading) return <p>Content loading</p>
  if (error) return <p>Error: {error.message} </p>
  
  return data;
  };

// Kundereiser
export async function getServicesThree() {

  const { data, loading, error } = await client.query({
    query: SERVICE_CLIENT,
  });
  
  if (loading) return <p>Content loading</p>
  if (error) return <p>Error: {error.message} </p>
  
  return data;
  };

// Analyse og innsikt
export async function getServicesFour() {

  const { data, loading, error } = await client.query({
    query: SERVICE_ANALYTICS,
  });
  
  if (loading) return <p>Content loading</p>
  if (error) return <p>Error: {error.message} </p>
  
  return data;
  };