import FeaturedRight from "./featured-right";
import FeaturedLeft from "./featured-left";

export default function HighLights({ highlights, featuredNews }) {

  const {
    
  } = highlights;

  console.log("H " + highlights);

  return (
    <ul className="flex flex-col sm:flex-row justify-between content-between p-5 bg-transparent antialiased bg-oculos-lightersage">
    <li className="flex flex-col sm:flex-row justify-between content-between p-5 bg-transparent antialiased max-w-[960px] mx-auto">
      
        {/* <FeaturedLeft /> */}
      
      </li>
    </ul> 
  );
}
