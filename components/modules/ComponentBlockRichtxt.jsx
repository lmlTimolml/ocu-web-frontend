import { customColors } from "../../customdata";
import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function RichTxt({ heading, content, bgRichTxt: { bgcolor } }) {

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="list-square py-10 max-w-[960px] mx-5 lg:mx-auto">
        <div className="mx-12 mt-2">
          {heading && <h2 className="text-xl font-bold">{heading}</h2>}
          {content && <p className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></p>}
        </div>
      </div>
    </section>
  );
}
