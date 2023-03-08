import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceArrow({ label, link, txt, style }) {
  return (
    <Link href={link} className="min-h-[140px] md:min-h-[120px]">
      <li className="group hover:bg-oculos-aqua flex flex-col h-full justify-between bg-oculos-hvit antialiased p-4 md:p-3 ease-linear duration-150 after:content-chevron-circle after:absolute after:w-5 after:self-center after:mt-24 after:opacity-0 hover:after:opacity-100 active:after:opacity-100 hover:after:mt-32 active:after:mt-32 after:duration-300 after:ease-linear">
        <h2 className="group-hover:text-white font-bold text-2xl sm:text-lg md:text-2xl mb-5">
          {label}
        </h2>
        <p className="relative group-hover:opacity-0 ease-linear duration-150">
          {txt}
          <FaArrowRight
            size="15"
            className="absolute bottom-[3px] left-14 opacity-100 group-hover:hidden ease-linear duration-150"
          />
        </p>
      </li>
    </Link>
  );
}
