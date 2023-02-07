import Hero from "../../components/layout/hero";
import Link from "next/link";
import { GET_ALL_EVENTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const EVENTS = GET_ALL_EVENTS;


export default function Inspiration() {
  const { loading, error, data } = useQuery(EVENTS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    

  const featuredField = (data.eventPage.data.attributes);
console.log(featuredField.nytittel);
  return (
    <>
      <Hero
        heading="Inspirasjon"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />
      <h1 className="font-bold text-5xl mb-5"></h1>

      <p className="text-sm mb-5"></p>

      <Link href="/">
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-4 mt-4 antialiased">
          <div className="sm:aspect-square bg-oculos-harmony col-start-2 col-end-4 row-start-1 row-end-3">
            <div className="bg-oculos-aqua h-full row-start-2 col-start-3 col-end-4"></div>
            <h3 className="font-bold text-1xl text-cyan-0 mb-1"></h3>
            <p className="text-sm text-cyan">
            
            </p>
          </div>
        </div>
      </Link>

      <section>{data.eventPage.data.attributes.uthevetSone}</section>
    </>
  );
}

/* 
export async function getStaticProps() {
  
  const { loading, error, data } = useQuery(ARTICLES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  {JSON.stringify(data)}
} */