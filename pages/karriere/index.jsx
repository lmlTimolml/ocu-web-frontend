export default function careerPage({pageContent, globalContent }) {

  return null;
  }
/* import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getCareerPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function careerPage({pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath
  } = pageContent;

  const components = Feed?.map((component) => {
    const ComponentType =
    require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  console.log("Page: Karriere", pageContent);

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
      
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}

    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getCareerPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.careerPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
    revalidate: 10,
  };
} */