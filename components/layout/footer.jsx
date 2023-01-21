import Link from "next/link";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto py-[20px] text-base antialiased max-w-[960px] bg-oculos-lightsage">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="flex flex-col border-t pt-[20px] border-black">
          <Link href="/" className="font-bold">
            Oculos AS
          </Link>
          <Link href="/">Kongens gate 21, 0153 Oslo</Link>
          <Link href="/">post@oculos.no</Link>
          <Link href="/">+ 47 22 12 88 30</Link>
          <p>Org.nr 984 459 564</p>
          <Link href="/">Personvernerklæring</Link>
        </div>
        <div className="flex flex-col border-t pt-[20px] border-black">
          <p className="font-bold">Naviger</p>
          <Link href="/">Webinarer og seminarer</Link>
          <Link href="/">Hvem er vi</Link>
          <Link href="/">Kontakt</Link>
        </div>
        <div className="flex flex-col border-t pt-[20px] border-black">
          <p className="font-bold">Følg oss</p>
          <div className="mt-[5px] flex justify-start w-[100%] items-center">
            <Link href="/">
              <FaInstagramSquare size="25" />
            </Link>
            <Link href="/" className="ml-2">
              <FaFacebookSquare size="25" />
            </Link>
            <Link href="/" className="ml-2">
              <FaLinkedin size="25" />
            </Link>
          </div>
          <Link href="/" className="mt-[20px] font-normal">
            Meld deg på vårt nyhetsbrev
          </Link>
        </div>
      </div>
    </footer>
  );
}
