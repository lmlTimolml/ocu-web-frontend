import FeaturedArticle from "./featured-item";

export default function FeaturedList(props) {
  const { items } = props;
  return (
    <ul className="grid gap-x-4 gap-y-4 grid-cols-2 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {items.map((article) => (
        <FeaturedArticle
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          content={article.description}
          image={article.image}
          link={article.link}
        />
      ))}
    </ul>
  );
}
