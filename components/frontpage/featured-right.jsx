import Button from "../ui/text-button";
import Image from "next/image";

export default function FeaturedRight({
  title,
  description,
  image,
  isFeatured,
  link,
  id,
}) {
  const eventLink = `/eventer/${id}`;
  if (isFeatured); 
    return (
      <li className="flex antialiased content-center align-middle justify-between p-3 md:p-5 bg-oculos-harmony">
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
