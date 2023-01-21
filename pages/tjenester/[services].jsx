import Hero from '../../components/layout/hero';
import ServiceNav from '../../components/layout/nested-layout';
import Layout from '../../components/layout/layout';

export default function servicePage() {
  return (
    <>
    <Hero />
      <h1>ServicePage</h1>
    </>
  )
}

servicePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ServiceNav>{page}</ServiceNav>
    </Layout>
  )
}
