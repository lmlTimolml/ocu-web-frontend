export default function ComponentModulesRichTextModule({...component}) {

  console.log(...component);

  /* const {
     richTxt,
     backgroundColor:
     bgColor,
     } = dynamicContent;
  
  console.log("Er det riktig: ", bgColor); */

  return (
    <section className="antialiased bg-white max-w-[960px] mx-auto">
      {/*<div className={`mx-12 mt-7 bg-${bgColor}`}>
      <h1 className="before:content-line before:block before:absolute before:ml-12 before:mt-[-48px]"></h1>
        <p className={`mx-12 mt-7 text-lg leading-6`}>{richTxt}</p>
      </div>*/}
    </section>
  );
}
