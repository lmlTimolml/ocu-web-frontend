import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getSecurityPageContent, getGlobalContent } from "../../lib/api";

export default function securityPage({ pageContent, globalContent }) {
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

<article>
        {components?.map((components, i) => {
          return <section key={i}>{components}</section>;
        })}
      </article>

    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getSecurityPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.sikkerhet.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
    revalidate: 10,
  };
}
