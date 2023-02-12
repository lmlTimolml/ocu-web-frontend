
import Layout from "../components/layout/layout";
import Hero from "../components/layout/hero";
import { getFrontPageContent, getGlobalContent } from "../lib/api";

import ServiceItem from "../components/services/service-item";
import FeaturedLeft from "../components/frontpage/featured-left";
import FeaturedRight from "../components/frontpage/featured-right";

export default function HomePage({ frontPage, globalContent }) {
  const {
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    dynamicHomePageSection,
    highLights: {events, articles},
    pageTitle,
    breadcrumbpath,
  } = frontPage;

return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        breadcrumbpath={breadcrumbpath}
      />
    <section className="w-full bg-oculos-lightersage py-5">
    <div className="flex flex-col sm:flex-row max-w-[960px] mx-5 sm:mx-auto justify-between">
 {events?.data?.map((eventContent, i) => (
   <FeaturedLeft key={i} eventContent={eventContent} />
   ))} 
   {articles?.data?.map((articleContent, i) => (
     <FeaturedRight articleContent={articleContent} />
   ))} 
    </div>
    </section>
      {dynamicHomePageSection?.map((content, i) => (
        <section key={i} className="py-16 antialiased max-w-[960px] mx-auto">
          <div className="pb-4">
            <h1 className="font-bold text-5xl mb-5">{content.title}</h1>
            <p className="font-medium text-2xl mb-5">{content.description}</p>
          </div>

          <ul className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
            {content?.serviceLinks?.map((links, i) => (
              <ServiceItem key={i} links={links} />
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
