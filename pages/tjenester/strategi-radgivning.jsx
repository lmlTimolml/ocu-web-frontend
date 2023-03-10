import Layout from "../../components/layout/layout";
import Hero from "../../components/layout/hero";
import Services from "../../components/layout/services";
import dynamic from "next/dynamic";
import { getServicesOne, getGlobalContent } from "../../lib/api";
import { customColors } from "../../customdata";

const background = customColors();

export default function StrategiRadgivning({ pageContent, globalContent }) {
  const {
    pageTitle,
    heroSection: { heroTitle, heroDescription, heroButton, heroImage, alt },
    breadcrumbpath,
    servnav: {
      button,
      bgColor: {bgcolor}
    },
    service,
  } = pageContent;

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
        alt={alt}
        breadcrumbpath={breadcrumbpath}
      />
      <section className="py-5">
      <div className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
            {button && (
              <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
              {button?.map((btn, i) => {
                const { label, link, txt, style } = btn;
                const Button = dynamic(() => import(`../../components/buttons/${style}`), {
                  ssr: false,
                });
                return (
                  <Button
                  key={i}
                  label={label}
                  txt={txt}
                  link={link}
                  style={style}
                  />
                  );
                })}
            </div>
          )}
          </div>
          </div>
          <Services service={service} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageContent = await getServicesOne(); // fetches query
  const globalContent = await getGlobalContent();

  return {
    props: {
      pageContent: pageContent.serviceSubPageOne.data.attributes, // creates a const from toplevel query and serves it as prop
      globalContent: globalContent.global.data.attributes,
    },
    revalidate: 10
  };
}
