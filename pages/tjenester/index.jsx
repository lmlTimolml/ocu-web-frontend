import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getServicePageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function servicesPage({ globalContent, pageContent }) {

  // Deconstruct the props
  const {
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    pageTitle,
    breadcrumbpath,
    serviceLinks,
    servicesPopulate: {service},
  } = pageContent;
        

  console.log("Page: Tjenester", service);
        // Return page content
        
        return (
          <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero heroTitle={heroTitle} heroDescription={heroDescription} heroButton={heroButton} heroImage={heroImage} breadcrumbpath={breadcrumbpath} />
      
      <section className="w-full bg-oculos-lightsage py-10">
      <div className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {serviceLinks?.map((links, i) => (
        <ServiceItemsMain key={i} links={links} />
        ))}

      </div>
      
      </section>
      
    
        <ServicesPageLayout service={service} />

      <div>


      </div>
    
    
    </Layout>
  );
}


export async function getStaticProps() {
  const pageContent = await getServicesPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.servicesPage.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
  };
}
