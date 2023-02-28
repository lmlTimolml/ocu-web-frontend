export default function Article({pageContent, globalContent }) {

  return null;
  }
/* import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getInspirationPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function Article({pageContent, globalContent }) {
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

  console.log("Page: Inspirasjon: Articleslug", pageContent);

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

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.posts.data.map((post) => {
    return { params: { slug: post.attributes.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
 */