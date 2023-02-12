import FeaturedRight from "./featured-right";
import FeaturedLeft from "./featured-left";

export default function FeaturedList({ featuredEvent, featuredNews }) {
  console.log(featuredNews);
  return (
    <ul className="grid gap-x-4 gap-y-4 auto-cols-fr grid-cols-2 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {featuredEvent?.map((featuredEvent, i) => (
        <FeaturedLeft key={i} featuredEvent={featuredEvent} />
      ))}
       {featuredNews?.map((featuredNews, i) => (
        <FeaturedRight key={i} featuredNews={featuredNews} />
      ))}  
    </ul> 
  );
}
