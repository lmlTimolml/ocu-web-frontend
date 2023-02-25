import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { customColors } from "../../customdata";

const background = customColors();

export default function Navigation({navigation}) {

  const {
    companylogo, navlink, bgColor: {bgcolor},
  } = navigation;

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-10 antialiased" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="py-4 max-w-[960px] mx-auto flex justify-between items-top">
        <div className="max-[960px]:ml-5 relative h-auto w-52">
          <Link href="/">
            <Image
              src={companylogo.data.attributes.url}
              width={190}
              height={25}
              style={{ objectFit: "contain", width: "190", height:"25" }}
              alt={companylogo.data.attributes.alternativeText}
            />
          </Link>
        </div>
        <ul className="hidden min-[910px]:flex md:mr-5 lg:mr-0">
          {navlink?.map((link, i) => (
            <li key={i} className="pl-4">
              <Link
                href={link.url}
                className="hover:font-bold tracking-[0.44px] hover:tracking-normal ease-linear"
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
                className="p-4 hover:text-oculos-aqua hover:font-bold duration-300"
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
