import { customColors } from "../../customdata";

const background = customColors();

export default function RichTxt({ heading, content, bgRichTxt: { bgcolor } }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="list-square py-10 max-w-[960px] mx-5 lg:mx-auto">
        <div className="mx-12 mt-2">
          {heading && <h1 className="text-xl font-bold">{heading}</h1>}
          {content && <p className="prose text-lg leading-6">{content}</p>}
        </div>
      </div>
    </section>
  );
}
