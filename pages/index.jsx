
import Layout from "../components/layout/layout";
import Hero from "../components/layout/hero";
import { getFrontPageContent, getGlobalContent } from "../lib/api";

import ServiceItem from "../components/services/service-item";
import FeaturedList from "../components/frontpage/featured-list";

export default function HomePage({ frontPage, globalContent }) {
  const {
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    dynamicHomePageSection,
    highLights: {featuredEvent, featuredNews},
    pageTitle,
    breadcrumbpath,
  } = frontPage;

console.log(dynamicHomePageSection);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        breadcrumbpath={breadcrumbpath}
      />

    
      <FeaturedList featuredEvent={featuredEvent} featuredNews={featuredNews} />
  
      {dynamicHomePageSection?.map((content, i) => (
        <section key={i} className="py-6 antialiased max-w-[960px] mx-auto">
          <div>
            <h1 className="font-bold text-5xl mb-5">{content.title}</h1>
            <p className="font-medium text-2xl mb-5">{content.description}</p>
          </div>

          <ul className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
            {content?.serviceLinks?.map((serviceLinks, i) => (
              <ServiceItem key={i} serviceLinks={serviceLinks} />
            ))}
          </ul>
        </section>
      ))}
      ;
    </Layout>
  );
}

export async function getStaticProps() {
  const frontPage = await getFrontPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      frontPage: frontPage.homePage.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
  };
}
