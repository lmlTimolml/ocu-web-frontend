import Image from "next/image";
import Link from "next/link";
import { companydata } from "../../companydata";

export default function Footer({companyinfo, socialmedia, footerlink, backGroundColor}) {
  
  const cData = companydata();
  return (
    <footer
      className="mx-auto py-[20px] text-base antialiased max-w-[960px]"
      aria-label="footer"
    >
      {companyinfo.map((info, i) => (
        <div key={i} className="flex justify-center border-t pt-[20px] border-black">
          <Link href="/" className="font-bold">{info.companyName}</Link>
          <Link href={cData.companyaddress}>&nbsp;|&nbsp;{info.companyAddress}</Link>
          <Link href={cData.companyemail}>&nbsp;|&nbsp;{info.companyEmail}</Link>
          <p>&nbsp;|&nbsp;{info.companyPhone}</p>
          <p>&nbsp;|&nbsp;{info.orgNr}</p>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center my-4">
        <div className="flex justify-between w-32 relative">
          {socialmedia.map((social, i) => (
            <div
            key={i} className="flex w-8 h-8 relative">
              <Link href={social.url}>
                <Image
                src={social.socialImg.data.attributes.url}
                fill
                style={{ objectFit: "contain" }}
                alt={social.label}
              />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center underline text-oculos-aqua my-4 data-[lightOip]:">
          {footerlink.map((links, i) => (
            <Link key={i} href={links.url}>
              {links.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}