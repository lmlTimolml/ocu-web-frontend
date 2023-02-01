import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceItem({ title, link, id }) {
  const serviceLink = `/tjenester/${id}`;

  return (
    <Link href={serviceLink}>
      <li
        key={id}
        className="group/main-parent flex flex-col aspect-square justify-between bg-oculos-harmony antialiased p-3 md:p-5"
      >
        <h2 className="font-bold text-2xl sm:text-lg md:text-2xl">{title}</h2>
        <button className="flex mt-4 relative">
          {link}
          <FaArrowRight className="ml-8 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[3.75rem] ease-linear duration-150" />
        </button>
      </li>
    </Link>
  );
}
