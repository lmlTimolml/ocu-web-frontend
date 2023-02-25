import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function TextArrow({ label, link, txt, style }) {
  
  return (
    <Link
      href={link}
      className="group/btn flex items-center box-border antialiased relative h-max w-max"
    >
      <p className="text-base">{label}</p>
      <FaArrowRight
        size="15"
        className="absolute mt-[2px] right-0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-[-20px] ease-linear duration-150"
      />
    </Link>
  );
};
