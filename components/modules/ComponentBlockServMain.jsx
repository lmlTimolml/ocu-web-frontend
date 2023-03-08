import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

export default function ServMain({ heading, content }) {


  return (
    <section className="before:content-corner-tl before:row-start-1 before:col-start-1 lg:before:col-start-3 before:w-12 sm:before:w-14 md:before:w-16 mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
        <div className="py-6 sm:pt-8 md:pl-8 col-start-1 col-span-3 row-start-1 md:col-span-6 lg:col-span-8 md:col-start-1 lg:col-start-3">
      <h1 className="font-bold pl-6 md:pl-0 text-2xl md:text-5xl mb-5">{heading}</h1>
      { content && <div className="font-medium text-lg sm:text-2xl"><ReactMarkdown>{content}</ReactMarkdown></div>}
      </div>

      
    </section>
  );
}
