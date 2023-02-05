import Hero from "../../components/layout/hero";
import Link from "next/link";
import { GET_ALL_ARTICLES } from "../../graphql/queries";
import { useQuery, gql } from "@apollo/client";
import { data } from "autoprefixer";

const ARTICLES = GET_ALL_ARTICLES;
const URL = process.env.GRAPHQL_ENDPOINT;

export default function Inspiration(data) {
  return (
    <>
      <Hero
        heading="Inspirasjon"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />
      <h1 className="font-bold text-5xl mb-5">Inspirasjon</h1>

      <h2 className="font-bold text-3xl mb-5">All posts</h2>

      <Link href="/">
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-4 mt-4 antialiased">
          <div className="sm:aspect-square bg-oculos-harmony col-start-2 col-end-4 row-start-1 row-end-3">
            <div className="bg-oculos-aqua h-full row-start-2 col-start-3 col-end-4"></div>
            <h3 className="font-bold text-1xl text-cyan-0 mb-1"></h3>
            <p className="text-sm text-cyan"></p>
          </div>
        </div>
      </Link>
    </>
  );
}

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: GET_ALL_ARTICLES,
    }),
  };
  const res = await fetch(`${URL}/`, fetchParams);
  const data = await res.json();
  console.log(data);
  return {
    props: data,
  };
  /* const { loading, error, data } = useQuery(ARTICLES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(ARTICLES); */
}
