import Button from "../ui/text-button";
import Image from "next/image";

export default function FeaturedRight({ featuredNews }) {
  
  const { title, description, image, button, tags, isFeatured, slug } =
    featuredNews.articles.data.attributes;

    console.log(title);

    return (
      <li key={id} className="flex antialiased content-center align-middle justify-between p-3 md:p-5 bg-oculos-harmony">
        <div className="flex flex-col justify-between w-[58%]">
          <h1 className="font-bold text-3xl mb-5">{title}</h1>
          <p className="font-medium text-lg mb-10">{description}</p>
          <Button link={eventLink}>{link = "Bli kjent med oss"}</Button>
        </div>
          <div className="flex flex-col justify-center w-[38%] bg-oculos-oip overflow-hidden origin-center">
            <Image src={"/" + image} alt={title} width={380} height={600}/>
          </div>
      </li>
    );
}