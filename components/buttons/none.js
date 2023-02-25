import Link from "next/link";

export default function None({ label, link, txt, style }) {
  return (
    <Link
      href={link}
      className="flex items-center box-border antialiased relative h-max w-max"
    >
      <p className="text-base no-underline">
        {label}
      </p>
    </Link>
  );
}
