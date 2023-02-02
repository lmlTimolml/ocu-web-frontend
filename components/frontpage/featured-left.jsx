import Button from "../ui/featured-cta-button";
import Image from "next/image";

export default function FeaturedLeft({ title, description, image, isFeatured, link, id }) {
  const articleLink = `/inspirasjon/${id}`;
  return (
    <li key={id} className="flex flex-col antialiased p-3 md:p-5 bg-white">
      <div className="flex justify-between mb-7">
        <h1 className="font-bold text-3xl mb-5 self-center">{title}</h1>
        <Image src={"/" + image} alt={title} width={100} height={100} />
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="font-medium text-lg mb-10">{description}</p>
        <Button link={articleLink}>{link}</Button>
      </div>
    </li>
  );
}
