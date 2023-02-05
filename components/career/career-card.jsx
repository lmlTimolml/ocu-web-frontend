import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function CareerCard({ id, title, description, image, alt, isFeatured, link }) {
  const carrierLink = {link};

  return (
    <Link href={carrierLink}>
      <li
        key={id}
        className="group/main-parent flex flex-col h-full bg-oculos-peppa antialiased"
      ><div className="relative aspect-video">
        <Image src={image} fill style={{objectFit:"contain"}} alt={alt} />
        </div>
        <div className="p-4 flex flex-col justify-between">
        <h3 className="font-bold text-2xl sm:text-lg">{title}</h3><p>{description}</p>
        <button link={carrierLink} className="flex mt-4 relative">
          {link}
          <FaArrowRight className="ml-20 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[6.5rem] ease-linear duration-300" />
        </button>
        </div>
      </li>
    </Link>
  );
}