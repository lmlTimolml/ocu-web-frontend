import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getEventPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function eventPage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    breadcrumbpath
  } = pageContent;

  const components = Feed?.map((component) => {
    const ComponentType =
    require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  console.log("Page: eventer", bgcolor);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
      />
      
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}

    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getEventPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.getEventPageContent.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
  };
}
