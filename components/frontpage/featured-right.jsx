import Button from "../ui/text-button";
import Image from "next/image";

export default function FeaturedRight({ featuredNews }) {
  
  const { title, description, image, button, isFeatured, id } =
    featuredNews.articles.data[0].attributes;

    console.log(image.url);
if(isFeatured)
    return (
      <li key={id} className="flex antialiased content-center align-middle justify-between md:p-5 bg-oculos-harmony">
        <div className="flex flex-col justify-between w-[48%]">
          <h1 className="font-bold text-3xl mb-5">{title}</h1>
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
