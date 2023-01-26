import Image from "next/image";

export default function ClientLogo({ id, alt, image }) {
  return (
    <li key={id} className="p-3 flex justify-center items-center">
      <Image src={image} height={50} width={120} alt={alt} />
    </li>
  );
}
