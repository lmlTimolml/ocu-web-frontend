import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ pageTitle, children, globalContent }) {
  
  const {
    navigation,
    footer,
  } = globalContent;

  return (
    <>
      <Nav navigation={navigation} />

      <Head>
        <title>{pageTitle}</title>
      </Head>

      <main className="text-base antialiased">

        {children}

      </main>

      
        <Footer footer={footer} />

      
    </>
  );
}
