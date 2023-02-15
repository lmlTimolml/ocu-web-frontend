import Button from "../ui/featured-cta-button";
import Image from "next/image";

export default function FeaturedLeft({ eventContent }) {
   
  
  const { 
    title, description, logo, button, isFeatured, id } =
    eventContent.attributes; 

    console.log(eventContent);
    
  if(isFeatured)
  return (
    <li key={id} className="flex flex-col antialiased p-3 md:p-5 my-5 bg-white w-full sm:w-[48%]">
     <div className="flex justify-between content-between mb-7">
        <h1 className="font-bold text-2xl mb-5 self-center w-[70%]">{title}</h1>
        
        <Image src={logo.data.attributes.url} alt={logo.alternativeText} width={120} height={120} />
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="font-medium text-lg mb-10">{description}</p>
        {button?.map((button, i) => (
        <div className="flex justify-start">
        <Button key={i} link={button.url}>{button.label}</Button>
        </div> 
        ))}
        </div> 
    </li>
  );
}

