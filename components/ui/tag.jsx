import Link from "next/link";

export default function Tag({ tag }) {
  const { name, slug } = tag.attributes;

  return (
    <Link href="/">
        <p className="my-[.15rem] py-1 px-3 box-content border text-[.875rem] text-gray-800 bg-gray-200 rounded-2xl mr-2 hover:border hover:border-gray-500 ease-linear duration-300">
          {name}
        </p>
    </Link>
  );
}
