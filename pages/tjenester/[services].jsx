import Hero from '../../components/layout/hero';
import ServiceNav from '../../components/layout/nested-layout';
import Layout from '../../components/layout/layout';

export default function servicePage() {
  return (
    <>
      <h1>ServicePage</h1>
    </>
  )
}

servicePage.getLayout = function getLayout(page) {
    return (
        <>
        
        <Hero heading="dynamic page" message="Kort setning om at vi leverer tjenester innen CRM og Loyalty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        <ServiceNav />
        {page}
        </>
      )
}