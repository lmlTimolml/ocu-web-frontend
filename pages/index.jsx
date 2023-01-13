import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Layout from "../components/layout/layout";
import { GET_ALL_POSTS } from "../grapql/queries";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ posts }) {
  
  return (
    <Layout>
      <h1 className="font-bold text-5xl mb-5">The Home Page</h1>

      <h2 className="font-bold text-3xl mb-5">All posts</h2>

      {posts.map((val, i) => {
        return (
          <Link key={i} href={val.attributes.slug}>
            <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-4 mt-4 antialiased">
        <div className="sm:aspect-square bg-oculos-harmony col-start-2 col-end-4 row-start-1 row-end-3">
          <div className="bg-oculos-aqua h-full row-start-2 col-start-3 col-end-4"></div>
              <h3 className="font-bold text-1xl text-cyan-0 mb-1">
                {val.attributes.title}
              </h3>
              <p className="text-sm text-cyan">
                {val.attributes.description}
              </p>
              </div>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://0.0.0.0:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.posts.data,
    },
  };
}
