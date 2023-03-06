import Image from "next/image";
import Link from "next/link";
import { customColors } from "../../customdata";

const background = customColors();

export default function ImgGrid({ logo, bgColor: { bgcolor } }) {
  return (
    <section style={{ backgroundColor: `${background[bgcolor]}` }}
    >
      <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
        <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {logo?.map((logo, i) => (
              <Link key={i} href={logo.url} className="flex justify-center items-center relative">
                <Image
                  src={logo.logo.data.attributes.url}
                  width={150}
                  height={50}
                  style={{ objectFit: "contain", maxHeight: "75px" }}
                  alt={logo.logo.data.attributes.alt}
                />
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
