import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ pageTitle, children, globalContent }) {
  
  const {
    navigation: { companylogo, navlink },
    footer: { companyinfo, socialmedia, footerlink, backGroundColor },
  } = globalContent;

  return (
    <>
      <Nav companylogo={companylogo} navlink={navlink} />
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <main>

        {children}

      </main>

      <div className="bg-oculos-lightsage px-5">
        <Footer companyinfo={companyinfo} socialmedia={socialmedia} footerlink={footerlink} backGroundColor={backGroundColor} />
      </div>
    </>
  );
}
