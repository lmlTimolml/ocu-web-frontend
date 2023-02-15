import "../styles/globals.css";

// Connecting Strapi via Graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  );
}
