import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Button(props) {
    return (
      <Link
        href={props.link}
        className="group/btn flex items-center box-border antialiased ease-linear duration-300 relative w-max"
      >
        <p className="text-base group/name ease-linear duration-150">
          {props.children}
        </p>
        <FaArrowRight
          size="15"
          className="absolute mt-[2px] right-0 group/arrow opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-[-20px] ease-linear duration-300"
        />
      </Link>
    );
  }

export default Button;
