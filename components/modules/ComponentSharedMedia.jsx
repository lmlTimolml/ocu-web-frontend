import Image from "next/image";
import { customColors } from "../../customdata";

const background = customColors();

export default function ComponentSharedMedia({ media, alt, caption, bgMedia: {bgcolor} }) {
  
  const { alternativeText, url } = media.data[0].attributes;
  
  return (
    <section className="py-5 my-4" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <section className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-1 max-w-[1440px]">
        <div className="block relative aspect-video col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={url}
            alt={alt}
          />
        </div>
      {caption && <div className="col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">
        <figcaption className="italic text-[0.75rem]">
          {caption}
        </figcaption>
      </div>}
      </section>
    </section>
  );
}
