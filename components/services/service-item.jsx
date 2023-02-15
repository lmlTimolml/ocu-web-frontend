import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Button from "../ui/text-button";

export default function ServiceItem({ serviceLinks }) {
  const { label, url, linkText } = serviceLinks;

  return (
     <Link href={url}>
      <li className="flex flex-col aspect-square justify-between bg-oculos-harmony antialiased p-3 md:p-5">
        <h2 className="font-bold text-2xl sm:text-lg md:text-2xl">
          {label}
        </h2>
        <div className="flex mt-4 relative">
          <Button link={url}>{linkText}</Button>
        </div>
      </li>
    </Link> 
  );
}
