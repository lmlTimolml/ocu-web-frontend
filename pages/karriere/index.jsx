import Hero from "../../components/layout/hero";
import { career } from "../../dummy-data";
import CareerGrid from "../../components/career/career-grid";

const careers = career();

const careerPage = () => {
  return (
    <>
      <Hero heading="Karriere" message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon" />
      <section className="px-5 py-6 bg-oculos-piglet">
      <CareerGrid info={careers} />
      </section>
    </>
  );
}

export default careerPage;
