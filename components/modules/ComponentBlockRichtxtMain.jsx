import { customColors } from "../../customdata";
import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })
const background = customColors();

export default function RichTxtMain({heading, content, bgRichTxtMain:{bgcolor}
}) {

  return (
    
    <section style={{ backgroundColor: `${background[bgcolor]}`}}>
    <div className="pt-2 before:content-line before:row-start-1 before:col-start-1 md:before:ml-8 lg:before:col-start-3 mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
      <div className="pt-8 pb-0 md:pl-8 col-start-1 col-span-3 row-start-1 md:col-span-6 lg:col-span-8 md:col-start-1 lg:col-start-3">
      {heading && <h2 className="text-2xl font-bold mb-2">{heading}</h2>}
      {content && <div className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></div>}
      </div>
    </div>
    </section>
  );
}
