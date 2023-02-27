import Image from "next/image";
import { customColors } from "../../customdata";import React from "react";
import dynamic from "next/dynamic";
const ReactMarkdown= dynamic(() => import('react-markdown'),{ ssr: false })

const background = customColors();

export default function ComponentBlockTxtRll({
  heading,
  content,
  media,
  alt,
  bgColor: { bgcolor },
}) {
  const { url } = media.data[0].attributes;

  return (
    <section className="pt-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <div className="max-w-[960px] mx-5 lg:mx-auto">
        <div className="grid gap-4 grid-cols-8 w-full">
          <div className="list-square col-span-8 md:col-span-4">
            <Image height={540} width={960} src={url} alt={alt} />
          </div>
          <div className="ml-0 sm:ml-12 col-span-8 md:col-span-4">
          {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {content && <div className="text-lg leading-6 markdown"><ReactMarkdown>{content}</ReactMarkdown></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
