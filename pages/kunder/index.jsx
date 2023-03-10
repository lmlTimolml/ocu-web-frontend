import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import Card from "../../components/modules/ComponentLayoutCard";
import {
  getClientsPageContent,
  getGlobalContent,
} from "../../lib/api";
import { customColors } from "../../customdata";
import Link from "next/link";

const background = customColors();

export default function clientsPage({
  pageContent,
  globalContent,
}) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
    Feed,
    clientGrid: {clients},
  } = pageContent;

  console.log(clients);

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        alt={alt}
        breadcrumbpath={breadcrumbpath}
      />
      <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
         <div className="my-6 grid col-span-3 md:col-span-6 lg:col-span-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 lg:col-start-3 gap-4">
          
          {clients.data?.map((client, i) => {
            return <Card key={i} client={client} />;
          })} 


        </div>
      </div> 
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getClientsPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.clientPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
      
    },
    revalidate: 10
  };
}
