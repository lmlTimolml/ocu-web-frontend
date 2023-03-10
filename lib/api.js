import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  GET_GLOBALS,
  GET_CONTACT_PAGE,
  GET_FRONT_PAGE,
  GET_ABOUT_PAGE,
  GET_SERVICES_PAGE,
  GET_CLIENTS_PAGE,
  GET_CLIENT_INFO,
  GET_CAREER_PAGE,
  GET_INSPIRATION_PAGE,
  GET_EVENTS_PAGE,
  GET_PERSONVERN_PAGE,
  GET_SECURITY_PAGE,
  SERVICE_STRAT,
  SERVICE_MARTECH,
  SERVICE_CLIENT,
  SERVICE_ANALYTICS,
} from "../graphql/queries";

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

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// HOMEPAGE

export async function getFrontPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_FRONT_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// CONTACT PAGE
export async function getContactPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_CONTACT_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// PERSONVERN PAGE
export async function getPersonvernPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_PERSONVERN_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// SIKKERHETSERKLÆRING PAGE
export async function getSecurityPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_SECURITY_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// ABOUT PAGE
export async function getAboutPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// CLIENTS PAGE
export async function getClientsPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_CLIENTS_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// CAREER PAGE
export async function getCareerPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_CAREER_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// INSPIRATION PAGE
export async function getInspiriationPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_INSPIRATION_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// EVENTS PAGE
export async function getEventPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_EVENTS_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// SERVICES PAGE
export async function getServicesPageContent() {
  const { data, loading, error } = await client.query({
    query: GET_SERVICES_PAGE,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// UNDERSIDER
// Strategi og Rådgivning
export async function getServicesOne() {
  const { data, loading, error } = await client.query({
    query: SERVICE_STRAT,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// Martech
export async function getServicesTwo() {
  const { data, loading, error } = await client.query({
    query: SERVICE_MARTECH,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// Kundereiser
export async function getServicesThree() {
  const { data, loading, error } = await client.query({
    query: SERVICE_CLIENT,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// Analyse og innsikt
export async function getServicesFour() {
  const { data, loading, error } = await client.query({
    query: SERVICE_ANALYTICS,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}

// Enkeltkunde
export async function getClientInfo() {
  const { data, loading, error } = await client.query({
    query: GET_CLIENT_INFO,
  });

  if (loading) return <p>Content loading</p>;
  if (error) return <p>Error: {error.message} </p>;

  return data;
}
