import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import { getContactPageContent, getGlobalContent } from "../../lib/api";
import { customColors, companydata } from "../../customdata";

const background = customColors();

export default function contactPage({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    breadcrumbpath,
    ContactInfo: {
      bgColor: { bgcolor },
      companycontactinfo,
    },
    Feed,
  } = pageContent;

console.log(pageContent);

  const { companyemail, companyaddress, companyphone } = companydata();

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  console.log("Page: Contact", companycontactinfo[0].url);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
      />
      <section className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="flex max-w-[960px] mx-5 lg:mx-auto justify-between">
          {companycontactinfo?.map((info, i) => (
            <div
              key={i}
              className="relative w-[33%] flex flex-col even:border-x-oculos-harmony even:border-x items-center"
            >
              <Link href={info.url}>
                <Image
                  className="mb-4"
                  src={info.icon.data.attributes.url}
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                  alt={info}
                />
              </Link>
              <p className="text-sm sm:text-base hidden sm:flex text-center">
                {info.description}
              </p>
              {info.phonenmbr && (
                <Link href={companyphone} className="text-sm sm:text-base">
                  {info.phonenmbr}
                </Link>
              )}
              {info.email && (
                <Link href={companyemail} className="text-sm sm:text-base">
                  {info.email}
                </Link>
              )}
              {info.address && (
                <Link href={companyaddress} className="text-sm sm:text-base">
                  {info.address}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getContactPageContent(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.contactPage.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
  };
}
