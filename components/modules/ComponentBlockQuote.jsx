import { customColors } from "../../customdata";

const background = customColors();

export default function Quote({ quote, source, bgQuote: {bgcolor} }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="before:content-quote before:w-12 sm:before:w-16 before:block max-w-[960px] mx-5 lg:mx-auto">
      <div className="flex sm:justify-end mt-2 sm:mt-[-3.75rem]">
          <div className="flex flex-col h-full sm:w-[85%] md:w-[90%]">
            <p className="text-2xl mb-6">{quote}</p>
            <p className="text-sm font-bold">{source}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
