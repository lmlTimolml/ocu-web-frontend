import Layout from "../components/layout/layout";
import Hero from "../components/layout/hero";
import { getFrontPageContent, getGlobalContent } from "../lib/api";
import { customColors } from "../customdata";

const background = customColors();

import FeaturedLeft from "../components/frontpage/featured-left";
import FeaturedRight from "../components/frontpage/featured-right";

export default function HomePage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
    highLights: {
      events,
      articles,
      bgColor: { bgcolor },
    },
    Feed,
  } = pageContent;

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        pageTitle={pageTitle}
        alt={alt}
        breadcrumbpath={breadcrumbpath}
      />
      <section className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="flex flex-col md:flex-row max-w-[960px] mx-5 lg:mx-auto justify-between">
          {events?.data?.map((eventContent, i) => (
            <FeaturedLeft key={i} eventContent={eventContent} />
          ))}

          {articles?.data?.map((articleContent, i) => (
            <FeaturedRight key={i} articleContent={articleContent} />
          ))}
        </div>
      </section>

      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  console.log("regen");
  const pageContent = await getFrontPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.homePage.data.attributes,
      globalContent: globalContent.global.data.attributes
    },
    revalidate: 10,
  };
}
