import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Button(props) {
    return (
      <Link
        href={props.link}
        className="group/btn flex items-center box-border px-6 py-2 border-2 border-oculos-100 bg-oculos-100 antialiased hover:bg-oculos-200 ease-linear duration-300 relative w-max"
      >
        <p className="text-base group/name group-hover/btn:ml-[-10px] group-hover/btn:px-[5px] ease-linear duration-150">
          {props.children}
        </p>
        <FaArrowRight
          size="15"
          className="absolute mt-[1px] right-3 group/arrow opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-2 ease-linear duration-150"
        />
      </Link>
    );
  }

export default Button;
