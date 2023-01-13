import Head from "next/head";
import Hero from "./hero";
import Footer from "./footer"

export default function Layout( { children } ) {
    return (
  <>
    <Head>
      <title>New Title</title>
    </Head>
    <Hero heading="Oculos er ledende i Norden innen CRM kundereiser, lojalitetsprogrammer og markedsføringsteknologi" message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"/>
    <main className="my-6">
      
    {children}
      
    </main>
    <Footer />
  </>
    );
}
