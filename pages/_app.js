import "../styles/globals.css";
import Layout from "../components/layout/layout";

// Connecting Strapi
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
console.log(client);
  return getLayout(
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
