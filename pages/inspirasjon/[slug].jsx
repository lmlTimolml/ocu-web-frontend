import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../grapql/queries";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

const client = new ApolloClient({
  uri: "http://0.0.0.0:1337/graphql",
  cache: new InMemoryCache(),
});

export default function Post({ post }) {
  return (
    <>
      <article className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-4 mt-4 bg-transparent antialiased">
        <section className="sm:aspect-square bg-oculos-oip col-start-2 col-end-3">
          <h1 className="text-5xl text-right pr-2">{post.title}</h1>
        </section>
        <section className="sm:col-start-3 sm:col-end-5 h-24 sm:h-full bg-slate-200 sm:bg-slate-500">
        <img
          src={cover.url}
          width={300}
          height={200}
          alt={post.title}
        /></section>
        <section className="text-sm sm:row-start-2 sm:col-start-2 sm:col-end-4">
        <p> {post.content}
        </p>
      </section>
      </article>
    </>
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

  const attrs = data.posts.data[0].attributes.url;
  return {
    props: {
      post: {
        title: attrs.title,
        content: attrs.content,
        cover: attrs.cover.url,
      },
    },
  };
}
