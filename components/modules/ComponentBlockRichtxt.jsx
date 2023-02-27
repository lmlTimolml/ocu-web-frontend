import { customColors } from "../../customdata";
import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function RichTxt({ heading, content, bgRichTxt: { bgcolor } }) {

  return (
    <section className="py-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="list-square max-w-[960px] mx-5 lg:mx-auto">
        <div className="mx-0 md:mx-12 mt-2">
          {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
          {content && <div className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></div>}
        </div>
      </div>
    </section>
  );
}
