import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getAboutPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";
import LeaderGrid from "../../components/employees/leader-grid"
import EmployeGrid from "../../components/employees/employee-grid";

const background = customColors();

export default function aboutPage({ pageContent, globalContent }) {
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

  console.log("Page: Om oss", bgcolor);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
      />

<section className="px-5 py-6 bg-oculos-lightersage">
        <LeaderGrid info={employee} />
      </section>

      <section className="px-5 py-6">
        <EmployeGrid info={employee} />
      </section>
      
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}

    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getAboutPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.aboutPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
  };
}