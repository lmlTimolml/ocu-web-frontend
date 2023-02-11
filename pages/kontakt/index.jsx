import Link from "next/link";
import Image from "next/image";
import Hero from "../../components/layout/hero";

import { getContactPageContent, getGlobalContent } from "../../lib/api";
import Layout from "../../components/layout/layout";

export default function contactPage({
  contactPage /* fetches prop from getStaticProps */,
  globalContent,
}) {
  const {
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    companyContactModule: { companycontactinfo },
    pageTitle,
    breadcrumbpath: { breadCrumb },
  } = contactPage; // fetch prop from pagefunction and deconstruct needed parts similar to graphql query

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero heroTitle={heroTitle} heroDescription={heroDescription} heroButton={heroButton} heroImage={heroImage} />
      <section className="flex justify-around mx-auto py-[20px] text-base antialiased max-w-[960px]">
        {companycontactinfo?.map((info, i) => (
          <div
            key={i}
            className="relative w-[33%] flex flex-col even:border-x-oculos-harmony even:border-x items-center"
          >
            <Link href={`${info.url}`}>
              <Image
                className="mb-4"
                src={info.icon.data.attributes.url}
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
                alt={info}
              />
            </Link>
            <p>{info.description}</p>
            <Link href={`${info.url}`}>{info.phonenmbr}</Link>
            <Link href={`mailto:${info.email}`}>{info.email}</Link>
            <Link href={`${info.url}`}>{info.address}</Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contactPage = await getContactPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      contactPage: contactPage.contactPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
  };
}
