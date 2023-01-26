import Link from "next/link";
import HeadingText from "../components/modules/heading-description";
import HeadingTextLink from "../components/modules/heading-description-link";
import Hero from "../components/layout/hero";
import FeaturedList from "../components/frontpage/featured-list";
import { getAllArticles, getAllServices, getAllEvents, clientLogos } from "../dummy-data";
import ServiceList from "../components/services/service-list";
import ContactImageModule from "../components/modules/contact-image-module";
import ClientLogoList from "../components/clients/client-logo-grid";

const article = getAllArticles();
const service = getAllServices();
const events = getAllEvents();
const clients = clientLogos();

export default function HomePage() {
  return (
    <>
      <Hero
        heading="Oculos er ledende i Norden innen CRM kundereiser, lojalitetsprogrammer og markedsføringsteknologi"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />
      <form>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" />
        </div>
        <button>Send feedback</button>
      </form>

      <section className="px-5 py-6 bg-oculos-lightersage">
        <FeaturedList key={[article.id, events.id]} items={[article, events]} />
      </section>

      <section className="px-5 py-6">
        <HeadingText
          title="Våre tjenester"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, eveniet ab. Accusamus quasi porro veritatis, officia odit rerum sint fugiat cum, quae ducimus repellat! Officiis eligendi qui impedit minima rem!"
        />
        <ServiceList items={service} />
      </section>

      <section className="px-5 py-6 bg-oculos-lightersage">
        <HeadingTextLink
          title="Våre kunder"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, eveniet ab. Accusamus quasi porro veritatis, officia odit rerum sint fugiat cum, quae ducimus repellat! Officiis eligendi qui impedit minima rem!"
          link="Les mer om våre kunder"
        />
        <ClientLogoList info={clients} />
      </section>

<section className="px-5 py-6">
  <ContactImageModule />
</section>
    </>
  );
}
