import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getPersonvernPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function personvernPage({ pageContent, globalContent }) {
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

  console.log("Page: Personvern");

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
      <section
        className="py-5"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-[960px] mx-5 lg:mx-auto">
        {/* <div className="flex flex-col md:flex-row max-w-[960px] mx-5 lg:mx-auto justify-between"> */}
          {servLink?.map((eventContent, i) => (
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
  const pageContent = await getPersonvernPageContent();
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.personvernPage.data.attributes,
      globalContent: globalContent.global.data.attributes,
    },
  };
}
