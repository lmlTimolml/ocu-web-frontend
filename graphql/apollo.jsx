import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const GRAPHQL_ENDPOINT = "http://0.0.0.0:1337/graphql";

const StrapiApolloProvider = (props) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default StrapiApolloProvider;
