import Link from "next/link";

export default function Shortcut({ label, link, txt, style }) {
  
    return (
      <Link
        href={link}
        className="group/btn flex items-center box-border rounded-[0.25rem] px-4 border border-black bg-transparent antialiased relative h-max w-max"
      >
        <p className="group-hover/btn:font-bold tracking-[0.4px] group-hover/btn:tracking-[0px] after:font-bold">
          {label}
        </p>
      </Link>
    );
  }
