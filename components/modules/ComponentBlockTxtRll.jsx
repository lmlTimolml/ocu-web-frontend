import Image from "next/image";
import { customColors } from "../../customdata";import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function ComponentBlockTxtRll({
  heading,
  content,
  media,
  bgColor: { bgcolor },
}) {
  const { alternativeText, url } = media.data[0].attributes;

  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="py-10 max-w-[960px] mx-5 lg:mx-auto">
        <div className="grid gap-4 grid-cols-8 w-full">
          <div className="list-square col-span-4">
            <Image height={540} width={960} src={url} alt={alternativeText} />
          </div>
          <div className="ml-12 col-span-4">
            {heading && <h1>{heading}</h1>}
            {content && <p className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></p>}
          </div>
        </div>
      </div>
    </section>
  );
}
