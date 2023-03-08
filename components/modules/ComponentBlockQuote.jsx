import { customColors } from "../../customdata";

const background = customColors();

export default function Quote({ quote, source, bgQuote: {bgcolor} }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="before:content-quote before:w-12 sm:before:w-16 lg:before:col-start-3 list-square mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
      <div className="md:col-start-2 col-span-3 md:col-span-6 lg:col-span-7 lg:col-start-4">
          
            <p className="text-2xl mb-6">{quote}</p>
            <p className="text-sm font-bold">{source}</p>
          
        </div>
      </div>
    </section>
  );
}
