import { customColors } from "../../customdata";
import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })
const background = customColors();

export default function RichTxtMain({heading, content, bgRichTxtMain:{bgcolor}
}) {
console.log(heading);
  return (
    
    <section style={{ backgroundColor: `${background[bgcolor]}`}}>
    <div className="before:content-line before:block before:absolute before:ml-0 sm:before:ml-12 before:mt-[-30px] py-8 max-w-[960px] mx-5 lg:mx-auto">
      <div className="mx-0 sm:mx-12 mt-2">
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      {content && <div className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></div>}
      </div>
    </div>
    </section>
  );
}
