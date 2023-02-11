import FeaturedRight from "./featured-right";
import FeaturedLeft from "./featured-left";

export default function FeaturedList({ featuredEvent, featuredNews }) {

  return (
    <ul className="grid gap-x-4 gap-y-4 auto-cols-fr mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
      {featuredEvent?.map((featuredEvent, i) => (
        <FeaturedLeft key={i} featuredEvent={featuredEvent} />
      ))}
      {/* {featuredNews?.map((news, i) => (
        <FeaturedRight key={i} news={news} />
      ))}  */}
    </ul> 
  );
}
