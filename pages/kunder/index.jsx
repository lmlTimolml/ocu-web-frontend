import Link from "next/link";
import FeaturedClientGrid from "../../components/clients/featured-client-grid";
import ClientLogoList from "../../components/clients/client-logo-grid";
import ContactImageModule from "../../components/modules/contact-image-module";
import Hero from "../../components/layout/hero";
import { clients, clientLogos } from "../../dummy-data";

export default function clientsPage() {
  const client = clients();
  const logos = clientLogos();

  return (
    <>
      <Hero
        heading="Kunder"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />

      <section className="px-5 py-6">
        <FeaturedClientGrid info={client} />
      </section>

      <section className="px-5 py-6 bg-oculos-lightersage">
        <ClientLogoList info={logos} />
      </section>

      <section className="px-5 py-6">
        <ContactImageModule />
      </section>
    </>
  );
}
