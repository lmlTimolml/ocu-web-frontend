import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function EmployeeCard({ id, name, title, image, alt, isLeader, email, link }) {
  const emailLink = {email};

  return (
    <Link href={emailLink}>
      <li
        key={id}
        className="group/main-parent flex flex-col h-full" style={{ backgroundColor: `${background[bgcolor]}`}}
      ><div className="relative aspect-square">
        <Image src={image} fill style={{objectFit:"contain"}} alt={alt} />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-2xl sm:text-lg">{name}</h3><p>{title}</p>
        <button link={emailLink} className="flex mt-4 relative">
          {email}
          <FaArrowRight className="ml-20 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[6.5rem] ease-linear duration-300" />
        </button>
        </div>
      </li>
    </Link>
  );
}