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
      <div className="list-square mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 max-w-[1440px]">
        
          <div className="p-4 col-span-3 sm:col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-3">
            {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {content && <div className="text-lg leading-6">{content}</div>}
          </div>
          <div className="col-span-3 sm:col-span-1 md:col-span-2">
            <Image height={960} width={960} src={url} alt={alternativeText} />
          </div>
          <div
            className="p-4 flex flex-col justify-between col-span-3 sm:col-span-1 md:col-span-2"
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
    </aside>
  );
}
