import Hero from "../../components/layout/hero";
import Link from "next/link";
import client from "../../graphql/queries";
import { GET_GLOBALS } from "../../graphql/queries";

export default function Inspiration(props) {

  const { globals } = props;
  /* DATA FROM STRAPI */

  /* const { loading, error, data } = useQuery(GET_INSPIRATION_PAGE);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  const hero = data.inspirationPage.data.attributes.heroSection;

  console.log(data.inspirationPage.data.attributes.heroSection.heroButton[0]); */

  /* DATA FROM STRAPI END */

  console.log(globals);
  return (
    <>
      <Hero />
      <h1 className="font-bold text-5xl mb-5"></h1>

      <p className="text-sm mb-5"></p>

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

export async function getStaticProps() {

  const { data } = await client.query({
    query: GET_GLOBALS,
  });

  return {
    props: {
      globals: { data }
    },
  };
}
