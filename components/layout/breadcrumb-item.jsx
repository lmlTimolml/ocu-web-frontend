import Link from "next/link";

export default function BreadcrumbItem({ children, href, isCurrent, ...props }) {

  return (
    <li {...props}>
      <Link href={href} passHref className={isCurrent && "font-bold underline"}
          aria-current={isCurrent ? "page" : "false"}>
        {children}
      </Link>
    </li>
  );
};