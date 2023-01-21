import Hero from "../../components/layout/hero";
import FeaturedList from "../../components/frontpage/featured-list";
import { getAllArticles, getAllServices } from "../../dummy-data";
import ServiceList from "../../components/services/service-list";

const article = getAllArticles();
const service = getAllServices();

const careerPage = () => {
  return (
    <>
      <Hero heading="Karriere" message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon" />
      <h1>Karriere</h1>
    </>
  );
}

export default careerPage;
