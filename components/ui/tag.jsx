import Link from "next/link";

export default function Tag({ tag }) {
  const { name, slug } = tag.attributes;

  console.log(tag);

  return (
    <Link href="/">
        <p className="py-1 px-3 text-sm bg-gray-300 rounded-xl mr-2">
          {name}
        </p>
    </Link>
  );
}
