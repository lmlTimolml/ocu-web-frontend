import { customColors } from "../../customdata";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function HeadingMain({ heading, content, button, bgHeadMain: {bgcolor} }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
    <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]"> 
      <div className="col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">
        { heading && <h1 className="font-bold text-2xl md:text-5xl mb-5">{heading}</h1> }
        { content && <div className="font-medium text-lg sm:text-2xl mb-10"><ReactMarkdown>{content}</ReactMarkdown></div> }
    </div>
      { button && <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {button?.map((btn, i) => {
            const { label, link, txt, style } = btn;
            const Button = dynamic(() => import(`../buttons/${style}`), {
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
          </div>}

    </div>
    </section>
  );
}
