import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation({companylogo, navlink}) {


  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-10 ease-in duration-300 antialiased bg-oculos-lightersage">
      <div className="py-4 max-w-[960px] mx-auto flex justify-between items-top">
        <div className="max-[960px]:ml-5 relative h-auto w-52">
          <Link href="/">
            <Image
              src={companylogo.data.attributes.url}
              width={190}
              height={25}
              style={{ objectFit: "contain" }}
              alt={companylogo.data.attributes.alternativeText}
            />
          </Link>
        </div>
        <ul className="hidden min-[910px]:flex md:mr-5 lg:mr-0">
          {navlink?.map((link, i) => (
            <li key={i} className="pl-4">
              <Link
                href={link.url}
                className="border-t-0 border-r-0 border-b-0 hover:text-oculos-aqua hover:border-b hover:pb-1 border-l-0 border-oculos-oip duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <div
          onClick={handleNav}
          className="flex self-center mr-5 min-[910px]:hidden z-10"
        >
          {nav ? <FaTimes size="25" /> : <FaBars size="25" />}
        </div>
        {/* Mobile Menu */}

        <nav
          className={`absolute top-0 ${
            nav ? "left-0" : "left-full"
          } right-0 bottom-0 flex justify-center items-center w-full h-screen min-[910px]:hidden bg-oculos-lightsage text-center ease-in duration-300`}
        >
          <ul className="text-xl">
            {navlink?.map((link, i) => (
              <li
                key={i}
                onClick={handleNav}
                className="p-4 hover:text-oculos-aqua duration-300"
              >
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}
