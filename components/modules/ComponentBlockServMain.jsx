
export default function ServMain({ heading, content }) {


  return (
    <section className="before:content-corner-tl before:w-12 sm:before:w-16 before:block py-10 max-w-[960px] mx-5 lg:mx-auto">
        <div className="mt-[-1.5rem] mx-12">
      <h1 className="font-bold text-5xl mb-5">{heading}</h1>
      <p className="font-medium text-2xl">{content}</p>
      </div>

      
    </section>
  );
}
