import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceItemsMain({ title, bulletpoints, id, link }) {
  const serviceLink = `/tjenester/${id}`;
  return (
    <Link
      href={serviceLink}
      className="group/main-parent bg-white hover:bg-oculos-aqua ease-linear duration-300 flex flex-col justify-end align-middle"
    >
      <li className="h-full group/sub-parent group-hover/main-parent:text-white flex flex-col justify-between antialiased p-3 md:p-5">
        <div className="">
          <h2 className="font-bold text-2xl sm:text-lg md:text-2xl mb-2">
            {title}
          </h2>
          <ul className="text-black text-sm list-square pl-4 group-hover/main-parent:text-white">
            <li>{bulletpoints[0]}</li>
            <li>{bulletpoints[1]}</li>
            <li>{bulletpoints[2]}</li>
          </ul>
        </div>

        <button className="text-sm flex mt-4 relative">
          {link} <FaArrowRight className="ml-8 mt-[1px] self-center absolute group/arrow opacity-0 group-hover/main-parent:opacity-100 group-hover/main-parent:ml-[3.25rem] ease-linear duration-150" />
        </button>
      </li>
    </Link>
  );
}
