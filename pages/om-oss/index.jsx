import Hero from "../../components/layout/hero";
import ContactImageModule from "../../components/modules/contact-image-module";
import ContactModule from "../../components/modules/contact-module";
import Button from "../../components/ui/main-cta-button";

export default function aboutPage() {
  return (
    <>
      <Hero
        heading="Om oss"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />
      <h1>Om oss</h1>

      <section className="px-5 py-6 bg-oculos-piglet">
        <ContactModule />
      </section>

      <section className="px-5 py-6">
        <ContactImageModule />
      </section>
    </>
  );
}
