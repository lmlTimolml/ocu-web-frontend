import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import Image from "next/image";
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

  const {
    logo,
    ingress,
    Feed,
    bgIngress: { bgcolor },
  } = featuredClient;

  const clientLogo = logo.data.attributes;

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
      <section className="pt-5 pb-10" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
        <div className="col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3"></div>
        {clientLogo.url && (
          <Image
            height={100}
            width={300}
            style={{ objectFit: "contain", maxHeight: "40px", width: "auto" }}
            src={clientLogo.url}
            alt={clientLogo.alternativeText}
            className="col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-3 pb-2"
          />
        )}
      <div className="p-4 border-black bg-white border col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">{ingress}</div>
      </div>
      </section>
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
  const featuredClient = clientInfo.clients.data.find(
    (c) => c.attributes.slug === params.clientid
  );

  return {
    props: {
      pageContent: pageContent.clientPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
      featuredClient: featuredClient.attributes,
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const clientInfo = await getClientInfo();
  const paths = clientInfo.clients.data.map((client) => ({
    params: { clientid: client.attributes.slug },
  }));

  return { paths, fallback: false };
}
