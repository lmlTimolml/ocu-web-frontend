import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import ArticleCard from "../../components/modules/ComponentArticleCard";
import Tag from "../../components/ui/tag";
import { getInspiriationPageContent, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function inspirationPage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
    Feed,
    articleGrid: {
      articles,
      bgModule: { bgcolor },
    },
  } = pageContent;

  /* const name = articles.data.map((article) =>
    article.attributes.tags.data.map((tag) => tag.attributes.name)
  ); */

  /* {name?.data.map((tag, i) => {
    return <Tag key={i} tag={tag} />
  })} */

  /* console.log("Artikler", name); */

  /* const tag = articles; */

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
      <section
        className="py-5"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">

          <div className="my-6 grid col-span-3 md:col-span-6 lg:col-span-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 lg:col-start-3 gap-4">
            {articles?.data?.map((article, i) => {
              return <ArticleCard key={i} article={article} />;
            })}
          </div>
        </div>
      </section>
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getInspiriationPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.articlesPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
    revalidate: 10,
  };
}
