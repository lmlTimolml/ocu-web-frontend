import Button from "../ui/featured-cta-button";
import Image from "next/image";

export default function FeaturedArticle(props) {
  const { title, description, image, link, id } = props;

  const ctaLink = `/inspirasjon/${id}`;

  return (
    <li className="flex flex-col bg-oculos-harmony antialiased p-3 md:p-5 first-of-type:bg-white">
    
        <div className="flex justify-between mb-7">
          <h1 className="font-bold text-3xl mb-5 self-center">{title}</h1>
          <Image src={"/" + image} alt={title} width={100} height={100} />
        </div>
        <div className="flex flex-col h-[100%] justify-between">
        <p className="font-medium text-lg mb-10">{description}</p>
        <Button link={ctaLink}>{link}</Button>
      </div>
    </li>
  );
}
