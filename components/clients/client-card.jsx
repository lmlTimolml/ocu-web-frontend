import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ClientCard({ id, image, alt, title, description, link }) {
  const clientLink = {link};

  return (
    <Link href={clientLink}>
      <li
        key={id}
        className="group/main-parent flex flex-col h-full bg-oculos-harmony antialiased"
      >
        <Image src={image} height={200} width={450} alt={alt} className="flex-grow-0" />
        <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-2xl sm:text-lg">{title}</h3><p>{description}</p>
        <button link={link} className="flex mt-4 relative">
          {link}
          <FaArrowRight className="ml-10 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[3.65rem] ease-linear duration-300" />
        </button>
        </div>
      </li>
    </Link>
  );
}