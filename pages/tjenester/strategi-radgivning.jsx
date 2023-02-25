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
    heroSection: { heroTitle, heroDescription, heroButton, heroImage },
    breadcrumbpath,
    servnav: {
      button,
      bgColor: {bgcolor}
    },
    service,
  } = pageContent;

  console.log("Page: strategi", bgcolor);

  return (
    <Layout globalContent={globalContent} pageTitle={pageTitle}>
      <Hero
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroButton={heroButton}
        heroImage={heroImage}
      />
      <section className="py-5">
      <div className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="max-w-[960px] mx-5 lg:mx-auto">
          {button && (
            <div className="grid pb-5 gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
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
  };
}
