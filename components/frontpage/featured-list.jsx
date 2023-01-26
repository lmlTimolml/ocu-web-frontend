import FeaturedRight from "./featured-right";
import FeaturedLeft from "./featured-left";

export default function FeaturedList({ items }) {
  return (
    <ul className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {items.map(([article, events]) => (
        
        [<FeaturedLeft
          key={article.id}
          title={article.title}
          description={article.description}
          content={article.description}
          image={article.image}
          isFeatured={article.isFeatured}
          link={article.link}
        />,
        
        <FeaturedRight
          key={events.id}
          id={events.id}
          title={events.title}
          description={events.description}
          content={events.description}
          image={events.image}
          isFeatured={events.isFeatured}
          link={events.link}
        />
    ]
      ))}
    </ul>
  );
}
