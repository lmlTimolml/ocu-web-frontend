import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Head>
        <title>New Title</title>
      </Head>
      <main>{children}</main>

      <div className="bg-oculos-lightsage px-5">
        <Footer />
      </div>
    </>
  );
}
