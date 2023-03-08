import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import Card from "../../components/modules/ComponentLayoutCard";
import {
  getClientInfo,
  getClientsPageContent,
  getGlobalContent,
} from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function clientsPage({
  pageContent,
  globalContent,
  featuredClient,
}) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
  } = pageContent;

  const { Feed } = featuredClient;

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  console.log("Featured client CSR", featuredClient);

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
        <div className="my-6 grid col-span-3 md:col-span-6 lg:col-span-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 lg:col-start-3 gap-4"></div>
      </div>
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps({ params }) {

  const pageContent = await getClientsPageContent(); // fetches query
  const globalContent = await getGlobalContent();
  const clientInfo = await getClientInfo();
  const featuredClient = clientInfo.clients.data.find((c) => c.attributes.slug === params.clientid);

  /* console.log("Featured client SSR 2", clientInfo);

  console.log("Featured client SSR", clientIdentifier); */

  return {
    props: {
      pageContent: pageContent.clientPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
      featuredClient: featuredClient.attributes,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const clientInfo = await getClientInfo();
  const paths = clientInfo.clients.data.map((client) => ({
    params: { clientid: client.attributes.slug },
  }));

  return { paths, fallback: false };
}
