import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../grapql/queries";
import Layout from "../components/layout/layout";

const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default function Post({ post }) {
  return (
    <Layout>
      
    <div className="flex flex-col border-solid border-2 mb-10 p-2">
      <h1 className="text-xl3 mb-3">{post.title}</h1>
      <p className="text-sm">{post.content}</p>
    </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.posts.data.map((post) => {
    return { params: { slug: post.attributes.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slug: params.slug },
  });

  const attrs = data.posts.data[0].attributes;

  return {
    props: {
      post: {
        title: attrs.title,
        content: attrs.content,
      },
    },
  };
}
