import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

export default function ServMain({ heading, content }) {


  return (
    <section className="before:content-corner-tl before:w-12 sm:before:w-16 before:block py-10 max-w-[960px] mx-5 lg:mx-auto">
        <div className="mt-[-1.5rem] mx-0 sm:mx-12">
      <h1 className="font-bold text-2xl md:text-5xl ml-5 sm:ml-0 mb-5">{heading}</h1>
      { content && <div className="font-medium text-lg sm:text-2xl"><ReactMarkdown>{content}</ReactMarkdown></div>}
      </div>

      
    </section>
  );
}
