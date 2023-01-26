import React from 'react'
import ServiceNav from '../../components/layout/nested-layout'
import Hero from '../../components/layout/hero'

export default function postOne() {
  return (
    <>
      <h1>Post One</h1>
    </>
  )
}



postOne.getLayout = function getLayout(page) {
  console.log(page);
  return (
    <>
    <Hero heading="Post one" message="Kort setning om at vi leverer tjenester innen CRM og Loyalty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
    <ServiceNav />
    {page}
    </>
  )
}
