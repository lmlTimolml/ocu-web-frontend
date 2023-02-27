import Image from "next/image";

export default function ClientLogo({ clientLogo }) {

/* const { clientlogo } = clientLogo; */
console.log(clientLogo);
  return (
    clientLogo?.map((logo, i) => (
      <li key={i} className="p-3 flex justify-center items-center relative">
      <Image src={logo.clientlogo.data.attributes.url} height={50} width={120} alt={logo.alternativeText} />
      </li>
  ))
      
  );
}
