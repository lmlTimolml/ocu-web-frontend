import Image from "next/image";
import { customColors } from "../../customdata";import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function ComponentBlockTxtLsr({
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
          <div className="list-square ml-12 col-span-4">
            {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {content && <p className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></p>}
          </div>
          <div className="col-span-4">
            <Image height={960} width={960} src={url} alt={alternativeText} />
          </div>
        </div>
      </div>
    </section>
  );
}
