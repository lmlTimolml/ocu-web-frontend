import Link from "next/link";

export default function Underline({ label, link, txt, style }) {
  
  return (
    <Link
      href={link}
      className="group/btn flex items-center box-border antialiased ease-linear duration-300 relative h-max w-max"
    >
      <p className="text-base group-hover/btn:font-bold underline text-oculos-aqua">{label}</p>
    </Link>
  );
};
