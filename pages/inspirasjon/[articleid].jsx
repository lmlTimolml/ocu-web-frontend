import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import Image from "next/image";
import {
  getArticleInfo,
  getInspiriationPageContent,
  getGlobalContent,
} from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function articlesPage({
  pageContent,
  globalContent,
  featuredArticle,
}) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
  } = pageContent;

  const {
    articleName,
    ingress,
    date,
    tags,
    Feed
  } = featuredArticle;

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
      
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const pageContent = await getInspiriationPageContent(); // fetches query
  const globalContent = await getGlobalContent();
  const articleInfo = await getArticleInfo();
  const featuredArticle = articleInfo.articles.data.find(
    (art) => art.attributes.slug === params.articleid
  );

  return {
    props: {
      pageContent: pageContent.articlesPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
      featuredArticle: featuredArticle.attributes,
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const articleInfo = await getArticleInfo();
  const paths = articleInfo.articles.data.map((article) => ({
    params: { articleid: article.attributes.slug },
  }));

  return { paths, fallback: false };
}
