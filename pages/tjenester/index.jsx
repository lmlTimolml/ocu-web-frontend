import Link from "next/link";
import Hero from "../../components/layout/hero";
import Layout from "../../components/layout/layout";
import ServiceNav from "../../components/layout/nested-layout";

export default function servicesPage() {

  return (
    <>
        <Hero heading="Våre tjenester" message="Kort setning om at vi leverer tjenester innen CRM og Loyalty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        
        <Link href="/tjenester/postOne">Link</Link>
        <h1>Index</h1>
    </>
  )
}

servicesPage.getLayout = function getLayout(page) {
  return (
    <Layout>
    <ServiceNav>
      {page}
      </ServiceNav>
    </Layout>
  )
}
