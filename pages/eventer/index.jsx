import Hero from "../../components/layout/hero";
import { useQuery } from "@apollo/client";
import { GET_GLOBALS } from "../../graphql/queries";

const Eventer = ({ info }) => {
  const { loading, error, data } = useQuery(GET_GLOBALS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const footer = (data.global.data.attributes.footer);
  return (
    <>
      <Hero
        heading="Eventer"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />

    </>
  );
};

export default Eventer;