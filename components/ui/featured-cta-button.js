import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Button({ link, children }) {
  return (
    <Link
      href={link}
      className="group/btn flex items-center box-border px-6 py-2 rounded-[0.25rem] border border-oculos-aqua bg-oculos-aqua antialiased hover:bg-white ease-linear duration-300 relative w-max mr-5"
    >
      <p className="text-base text-white group/name group-hover/btn:ml-[-10px] group-hover/btn:px-[5px] group-hover/btn:text-oculos-aqua ease-linear duration-300">
        {children}
      </p>
      <FaArrowRight
        size="15"
        className="absolute text-white mt-[1px] right-3 group/arrow opacity-0 group-hover/btn:opacity-100 group-hover/btn:text-oculos-aqua group-hover/btn:right-2 ease-linear duration-300"
      />
    </Link>
  );
}

export default Button;
