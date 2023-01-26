import Link from "next/link";
import Hero from "../../components/layout/hero";
import ImageFull from "../../components/modules/image-full";
import HeadingTextElement from "../../components/modules/heading-description-element";
import ServiceNav from "../../components/layout/nested-layout";
import PlainText from "../../components/modules/plain-text";
import BulletList from "../../components/modules/bulletlist";
import ImageTwoCol from "../../components/modules/image-2-col";
import ContactImageModule from "../../components/modules/contact-image-module";

export default function servicesPage() {
  return (
    <>
      <section className="px-5 py-6">
        <ImageFull imagecaption="Bildetekst. Foto: Navn Navnesen 2023." />
      </section>

      <section className="px-5 py-6">
        <HeadingTextElement
          title="Rådgivning og strategi"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, eveniet ab. Accusamus quasi porro veritatis, officia odit rerum sint fugiat cum, quae ducimus repellat! Officiis eligendi qui impedit minima rem!"
        />
      </section>

      <section className="px-5 py-6">
        <PlainText />
      </section>

      <section className="md:px-0 px-5 py-6 flex flex-col md:gap-x-8 md:gap-y-4 md:grid md:grid-cols-[minmax(0px,_1fr)_minmax(120px,_463px)_minmax(120px,_463px)minmax(0px,_1fr)] antialiased mx-auto">
        <div className="md:col-start-2 mb-4 md:mb-0">
          <BulletList
            title="Punktliste"
            bulletpoints="Lorem ipsum dolor sit amet, consetetur"
          />
        </div>
        <div className="md:col-start-3 sm:col-span-2">
          <ImageTwoCol />
        </div>
      </section>

      <section className="px-5 py-6">
        <ContactImageModule />
      </section>
    </>
  );
}

servicesPage.getLayout = function getLayout(page) {
  return (
    <>
      <Hero
        heading="index"
        message="Kort setning om at vi leverer tjenester innen CRM og Loyalty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
      <section className="bg-oculos-lightsage px-5 py-11">
        <ServiceNav />
      </section>

      {page}
    </>
  );
};
