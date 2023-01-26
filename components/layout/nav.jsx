import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState('transparent');
  const [txtColor, setTxtColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=> {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#DFE9E0")
        setTxtColor("#000000")
      } else {
        setColor("transparent")
        setTxtColor("#ffffff")
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300 antialiased">
      <div className="h-5 bg-oculos-aqua"></div>
      <div className="max-w-[960px] mx-auto flex justify-between items-top">
        <Link href="/" passHref>
          {/* esLint-disable @next/next/no-img-element */}
          <img
            className="my-5 ml-5 lg:ml-0"
            src="/oculogo_neg.svg"
            width={200}
            height={34}
            alt="Home"
          />
        </Link>
        <ul style={{color: `${txtColor}`}} className="hidden min-[910px]:flex md:mr-5 lg:mr-0">
          <li className="py-4 pl-4">
            <Link style={{color: `${txtColor}`}}
              href="/om-oss"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Om oss
            </Link>
          </li>
          <li className="py-4 pl-4 group/item relative">
            <Link
              href="/tjenester"
            >
              Tjenester
            </Link>

            { /*submenu*/ }
            
            <ul style={{backgroundColor: `${color}`}} className="p-2 ml-[-5px] mb-2 absolute opacity-0 mt-[-100%] group-hover/item:opacity-100 group-hover/item:mt-[0] group-focus/item:opacity-100 group-focus-visible/item:mt-[0] duration-300 antialiased">
              <li className="border-t-0 border-r-0 border-b-0 hover:border-b duration-150 delay-300"><Link
              href="/tjenester"
            >
              Strategi & rådgivning
            </Link></li>
              <li className="border-t-0 border-r-0 border-b-0 hover:border-b duration-150"><Link
              href="/tjenester"
              className="duration-300"
            >
              MarTech
            </Link></li>
              <li className="border-t-0 border-r-0 border-b-0 hover:border-b duration-150"><Link
              href="/tjenester"
              className="duration-300"
            >
              Kundereiser
            </Link></li>
              <li className="border-t-0 border-r-0 border-b-0 hover:border-b duration-150"><Link
              href="/tjenester"
              className="duration-300"
            >
              Innsikt
            </Link></li>
            </ul>
          </li>
          <li className="py-4 pl-4">
            <Link
              href="/kunder"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Kunder
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              href="/inspirasjon"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Inspirasjon
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              href="/karriere"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Karriere
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              href="/eventer"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Eventer
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              href="/kontakt"
              className="border-t-0 border-r-0 border-b-0 hover:border-b hover:pb-2 border-l-0 border-white duration-300"
            >
              Kontakt oss
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
<div onClick={handleNav} className="flex self-center mr-5 min-[910px]:hidden z-10">
        {nav ? (
          <FaTimes size="25" />
        ) : (
          <FaBars size="25" style={{color: `${txtColor}`}} />
        )}
</div>
        {/* Mobile Menu */}

        <nav
          className={`absolute top-0 ${
            nav ? "left-0" : "left-full"
          } right-0 bottom-0 flex justify-center items-center w-full h-screen min-[910px]:hidden bg-oculos-lightsage text-center ease-in duration-300`}
        >
          <ul className="text-xl">
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/om-oss">Om oss</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/tjenester">Tjenester</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/kunder">Kunder</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/inspirasjon">Inspirasjon</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/karriere">Karriere</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/eventer">Eventer</Link>
            </li>
            <li onClick={handleNav} className="p-4 hover:text-oculos-aqua duration-300">
              <Link href="/kontakt">Kontakt oss</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
