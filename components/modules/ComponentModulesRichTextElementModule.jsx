export default function ComponentModulesRichTextElementModule({
  heading,
  richTxt,
  backgroundColor
}) {
    
/* const {bgColor} = backgroundColor; */

console.log(heading, richTxt);

  return (
    <section className="antialiased bg-oculos-aqua before:content-line before:block before:absolute before:ml-12 before:mt-[-40px] py-10 max-w-[960px] mx-5 md:mx-auto">
      {/* <div className={`mx-12 mt-7 bg-${bgColor}`}> */}
      <div className="mx-12 mt-2">
      {heading && <h2 className="text-xl font-bold">{heading}</h2>}
      {/*   <h2 className="text-xl font-bold">{heading}</h2> */}
        <p className="text-lg leading-6">{richTxt}</p>
      </div>
    </section>
  );
}
