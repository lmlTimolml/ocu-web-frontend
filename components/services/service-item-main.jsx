import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceItemsMain(props) {
  const { title, bulletpoints, link, id } = props;

  const serviceLink = `/tjenester/${id}`;

  return (
    <Link
      href={serviceLink}
      className="group/main-parent bg-oculos-harmony hover:bg-oculos-aqua ease-linear duration-300"
    >
      <li className="h-[100%] group/sub-parent group-hover/main-parent:text-white flex flex-col justify-between antialiased p-3 md:p-5">
        <div className="">
        <h2 className="font-bold text-2xl sm:text-lg md:text-2xl mb-2">{title}</h2>
        <ul className="text-black text-sm list-square pl-4 group-hover/main-parent:text-white">
          <li>{bulletpoints[0]}</li>
          <li>{bulletpoints[1]}</li>
          <li>{bulletpoints[2]}</li>
        </ul>
        </div>

        <p className="text-sm flex mt-4">Les mer <FaArrowRight className="ml-1 mt-[1px] self-center" /></p>
      </li>
    </Link>
  );
}
