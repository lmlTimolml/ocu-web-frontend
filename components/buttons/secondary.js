import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Secondary({ label, link, txt, style }) {
  return (
    <Link
      href={link}
      className="group/btn flex items-center box-border rounded-[0.25rem] px-6 py-2 border border-oculos-peppa bg-oculos-peppa antialiased ease-linear duration-300 relative h-max w-max"
    >
      <p className="text-base group-hover/btn:ml-[-15px] group-hover/btn:mr-[5px] group-hover/btn:px-[5px] ease-linear duration-150">
        {label}
      </p>
      <FaArrowRight
        size="15"
        className="absolute mt-[1px] right-8 opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-3 ease-linear duration-150"
      />
    </Link>
  );
}
