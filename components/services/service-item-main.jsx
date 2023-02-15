import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceItemsMain({ links }) {
  const { label, url, linkText } = links;
  return (
    <Link href={url}
      className="group/main-parent bg-white hover:bg-oculos-aqua ease-linear duration-300 flex flex-col justify-end align-middle"
    >
      <li className="h-full group/sub-parent group-hover/main-parent:text-white flex flex-col justify-between antialiased p-3 md:p-5">
        <div className="">
          <h2 className="font-bold text-2xl sm:text-lg md:text-2xl mb-2">
            {label}
          </h2>
        </div>

        <button className="text-sm flex mt-4 relative">
          {linkText} <FaArrowRight className="ml-8 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[3.25rem] ease-linear duration-150" />
        </button>
      </li>
    </Link>
  );
}
