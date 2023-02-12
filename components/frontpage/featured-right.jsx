import Button from "../ui/text-button";
import Image from "next/image";

export default function FeaturedRight({ articleContent }) {
  
  const { 
    title, description, image, button, isFeatured, id } =
    articleContent.attributes; 

console.log(articleContent);
if(isFeatured)
    return (
      <li key={id} className="flex antialiased content-center align-middle justify-between md:p-5 my-5 bg-oculos-harmony w-full sm:w-[48%]">
        <div className="flex flex-col justify-between w-[50%] p-5">
          <h1 className="font-bold text-2xl mb-5">{title}</h1>
          <p className="font-medium text-lg mb-10">{description}</p>
          
        {button?.map((button, i) => (
          <div className="flex justify-start">
        <Button key={i} link={button.url}>{button.label}</Button>
        </div> 
        ))}
        </div>
          <div className="flex flex-col justify-center w-[48%] bg-oculos-oip overflow-hidden relative">
          <Image src={image.data[0].attributes.url} alt={image.alternativeText} fill style={{objectFit: "cover"}} />
          </div>
      </li>
    );
}
