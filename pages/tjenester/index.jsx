import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getServicesPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

import FeaturedLeft from "../../components/frontpage/featured-left";

export default function servicesPage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    breadcrumbpath,
    highLights: {
      events,
      bgColor: { bgcolor },
    },
    Feed,
  } = pageContent;

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  console.log("Page: Tjenester", bgcolor);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        breadcrumbpath={breadcrumbpath}
      />
      <section className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="flex flex-col md:flex-row max-w-[960px] mx-5 lg:mx-auto justify-between">
          {events?.data?.map((eventContent, i) => (
            <FeaturedLeft key={i} eventContent={eventContent} />
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
  const pageContent = await getServicesPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.servicesPage.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
  };
}
