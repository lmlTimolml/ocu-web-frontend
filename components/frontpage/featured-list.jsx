import FeaturedRight from "./featured-right";
import FeaturedLeft from "./featured-left";

export default function FeaturedList({ items }) {
  return (
    <ul className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {items.map(([article, events]) => {
        if (article.isFeatured || events.isFeatured)
        return [
        <FeaturedLeft 
          id={article.id}
          key={article.id}
          title={article.title}
          description={article.description}
          image={article.image}
          link={article.link}
        />,
        
        <FeaturedRight
        id={events.id}
          key={events.id}
          title={events.title}
          description={events.description}
          image={events.image}
          link={events.link}
        />
    
    ]})}
    </ul>
  );
}