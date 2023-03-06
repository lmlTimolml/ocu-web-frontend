import Image from "next/image";
import Link from "next/link";
import { companydata, customColors } from "../../customdata";

const background = customColors();

export default function Footer({ footer }) {
  const {
    companyinfo,
    socialmedia,
    link,
    bgColor: { bgcolor },
  } = footer;

  const cData = companydata();
  return (
    <footer
      className="mx-auto py-5" style={{ backgroundColor: `${background[bgcolor]}`}}
      aria-label="footer"
    >
      <section className="py-5 mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
      {companyinfo.map((info, i) => (
        <div
          key={i}
          className="flex flex-col items-center sm:flex-row justify-center border-t pt-[20px] border-black col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3"
        >
          <Link href="/" className="font-bold">
            {info.companyName}
          </Link>
          <Link href={cData.companyaddress} className="sm:before:content-['|'] sm:before:px-1">
            {info.companyAddress}
          </Link>
          <Link href={cData.companyemail} className="sm:before:content-['|'] sm:before:px-1">
            {info.companyEmail}
          </Link>
          <p className="sm:before:content-['|'] sm:before:px-1">{info.companyPhone}</p>
          <p className="sm:before:content-['|'] sm:before:px-1">{info.orgNr}</p>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center my-4 col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">
        <div className="flex justify-between w-32 relative">
          {socialmedia.map((social, i) => (
            <div key={i} className="flex w-8 h-8 relative">
              <Link href={social.url}>
                <Image
                  src={social.socialImg.data.attributes.url}
                  width={40}
                  height={40}
                  alt={social.label}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center underline text-oculos-aqua my-4">
          {link.map((links, i) => (
            <Link key={i} href={links.url}>
              {links.label}
            </Link>
          ))}
        </div>
      </div>
      </section>
    </footer>
  );
}
