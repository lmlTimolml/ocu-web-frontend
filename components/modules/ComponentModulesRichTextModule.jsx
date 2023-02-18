export default function ComponentModulesRichTextModule({
  heading,
  richTxt,
  backgroundColor
}) {
    
/* const {bgColor} = backgroundColor; */

console.log(heading, richTxt);

  return (
    <section className="antialiased py-10 max-w-[960px] mx-5 md:mx-auto">
      {/* <div className={`mx-12 mt-7 bg-${bgColor}`}> */}
      <div className="mt-7">
        <h1 className=""></h1>
        <p className="mx-12 mt-7 text-lg leading-6">{richTxt}</p>
      </div>
    </section>
  );
}
