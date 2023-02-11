import Button from "../ui/featured-cta-button";
import Image from "next/image";

export default function FeaturedLeft({ featuredEvent }) {
   const { title, description, logo, button, tags, isFeatured, slug } =
    featuredEvent.events.data[0].attributes; 

  console.log(title);

   if (!isFeatured) 
  return (
    <li className="flex flex-col antialiased p-3 md:p-5 bg-white">
     <div className="flex justify-between mb-7 w-[70%]">
        <h1 className="font-bold text-3xl mb-5 self-center">{title}</h1>
        <Image src={logo.data.attributes.url} alt={logo.alternativeText} width={120} height={120} />
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="font-medium text-lg mb-10">{description}</p>
        <div className="flex justify-start">
        {button?.map((button, i) => (
        <Button key={i} link={button.url}>{button.label}</Button>
        ))}
        </div> 
        </div> 
    </li>
  );
}

