import { customColors } from "../../customdata";

const background = customColors();

export default function RichTxtMain({heading, content, bgRichTxtMain:{bgcolor}
}) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
    <div className="before:content-line before:block before:absolute before:ml-12 before:mt-[-40px] py-10 max-w-[960px] mx-5 lg:mx-auto">
      <div className="mx-12 mt-2">
      {heading && <h2 className="text-xl font-bold">{heading}</h2>}
      {content && <p className="text-lg leading-6">{content}</p>}
      </div>
    </div>
    </section>
  );
}
