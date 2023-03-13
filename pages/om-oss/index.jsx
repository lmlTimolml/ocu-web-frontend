import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getAboutPageContent, getGlobalContent } from "../../lib/api";

export default function aboutPage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
    Feed,
  } = pageContent;

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

<article className="py-5">
        {components?.map((components, i) => {
          return <section key={i}>{components}</section>;
        })}
      </article>

    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getAboutPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.about.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
    revalidate: 10
  };
}
