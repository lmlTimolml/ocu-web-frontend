import Image from "next/image";
import { customColors } from "../../customdata";import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function ComponentBlockTxtLlr({
  heading,
  content,
  media,
  alt,
  bgColor: { bgcolor },
}) {
  const { url } = media.data[0].attributes;
  
  return (
    <section className="pt-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="list-square mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
        
          <div className="md:pl-8 col-span-3 md:col-span-6 lg:col-span-4 lg:col-start-3">
            {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {content && <div className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></div>}
          </div>
          <div className="col-span-3 md:col-span-6 lg:col-span-6 lg:col-start-7">
            <Image height={540} width={960} src={url} alt={alt} />
          </div>
        </div>
      
    </section>
  );
}
