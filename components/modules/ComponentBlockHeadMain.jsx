import { customColors } from "../../customdata";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function HeadingMain({ heading, content, button, bgHeadMain: {bgcolor} }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
    <div className="max-w-[960px] mx-5 lg:mx-auto"> 
      <div>
        {heading && <h1 className="font-bold text-5xl mb-5">{heading}</h1>}
        { content && <div className="font-medium text-2xl"><ReactMarkdown>{content}</ReactMarkdown></div>}
    </div>
      { button && <div className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-auto">
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
