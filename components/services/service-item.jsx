import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceItem({ links }) {
  const { label, url, linkText } = links;

  return (
    <Link href={url}>
      <li className="group/main-parent hover:bg-oculos-aqua flex flex-col h-full justify-between bg-oculos-harmony antialiased p-4 md:p-3 ease-linear duration-300">
        <h2 className="group-hover/main-parent:text-white font-bold text-2xl sm:text-lg md:text-2xl mb-5">
          {label}
        </h2>
        <p className="relative group-hover/main-parent:text-white text-base ease-linear duration-150">
          {linkText}
          <FaArrowRight
          size="15"
          className="absolute bottom-[3px] left-12 opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:text-white group-hover/main-parent:left-14 ease-linear duration-300"
        />
        </p>
        
      </li>
    </Link>
  );
}
