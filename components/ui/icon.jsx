import Image from "next/image";
import Link from "next/link";

export default function Icon({contact}) {

    const {
        icon,
        link,
      } = contact;

  return (
    <Link href={link} className="mr-2 hover:scale-105 ease-linear duration-150">
        <Image
                  className="mb-4"
                  src={icon.data.attributes.url}
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                  alt={icon.data.attributes.url}
                />
    </Link>
  );
}
