import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Button(props) {
    return (
      <Link
        href={props.link}
        className="group/btn flex items-center box-border rounded-[0.25rem] px-6 py-2 border border-white bg-transparent antialiased hover:bg-white ease-linear duration-300 relative w-max"
      >
        <p className="group/name group-hover/btn:ml-[-10px] group-hover/btn:px-[5px] group-hover/btn:text-black font-bold ease-linear duration-300">
          {props.children}
        </p>
        <FaArrowRight
          size="15"
          className="absolute mt-[1px] right-3 group/arrow opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-2 group-hover/btn:text-black ease-linear duration-300"
        />
      </Link>
    );
  }

export default Button;
