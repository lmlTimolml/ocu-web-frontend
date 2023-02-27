import Image from "next/image";
import { customColors } from "../../customdata";
import React from "react";
import dynamic from "next/dynamic";

const background = customColors();

export default function ComponentBlockQuestions({
  heading,
  content,
  img,
  bgInfo,
  bgModule,
  name,
  title,
  questlink: {label, txt, link, style},
  phone,
}) {
  const bgcolor = bgInfo.bgcolor;
  const bgmodule = bgModule.bgcolor;
  const { url, alternativeText } = img.data.attributes;

  // fetch button
  const Button = dynamic(() => import(`../buttons/${style}`), {
    ssr: false,
  });

  return (
    <aside
      className="py-5 my-5"
      style={{ backgroundColor: `${background[bgmodule]}` }}
    >
      <div className="max-w-[960px] mx-5 lg:mx-auto">
        <div className="grid grid-cols-8 w-full">
          <div className="list-square ml-0 sm:ml-12 col-span-8 md:col-span-4 pr-4 pb-4">
            {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {content && <div className="text-lg leading-6">{content}</div>}
          </div>
          <div className="col-span-4 md:col-span-2">
            <Image height={960} width={960} src={url} alt={alternativeText} />
          </div>
          <div
            className="flex flex-col justify-between col-span-4 md:col-span-2 p-4"
            style={{ backgroundColor: `${background[bgcolor]}` }}
          >
            <div>
              <h4 className="text-lg font-bold">{name}</h4>
              <p>{title}</p>
            </div>
            <div>
              <p>{phone}</p>
              <Button label={label} txt={txt} link={link} style={style} type="submit" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
