
import Link from "next/link";
import HeadingTextModule from "../components/modules/heading-description";
import Hero from "../components/layout/hero";
import FeaturedList from "../components/frontpage/featured-list";
import { getAllArticles, getAllServices } from "../dummy-data";
import ServiceList from "../components/services/service-list";

const article = getAllArticles();
const service = getAllServices();

console.log(article.id);
export default function HomePage() {
  return (
    <>
      <Hero
        heading="Oculos er ledende i Norden innen CRM kundereiser, lojalitetsprogrammer og markedsføringsteknologi"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />
      <div className="bg-oculos-lightsage px-5 py-11">
      <FeaturedList items={article} />
      </div>
      <div className="px-5 pt-11">
        <HeadingTextModule />
      </div>
      <div className="px-5 pb-11">
        <ServiceList items={service} />
      </div>
      
      <div className="px-5 pt-11 bg-oculos-lightsage">
        <HeadingTextModule />
      </div>
      </>
  );
}
