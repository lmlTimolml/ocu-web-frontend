import Image from "next/image";
import { customColors } from "../../customdata";

const background = customColors();

export default function ComponentSharedMedia({ media, alt, caption, bgMedia: {bgcolor} }) {
  
  const { alternativeText, url } = media.data[0].attributes;
  
  return (
    <section className="py-5 my-5" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <section className="max-w-[960px] mx-5 lg:mx-auto relative aspect-video">
        <div className="block">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={url}
            alt={alt}
          />
        </div>
      </section>
      {caption && <div>
        <figcaption className="max-w-[960px] mx-5 lg:mx-auto mt-2 antialiased italic text-[0.75rem] relative">
          {caption}
        </figcaption>
      </div>}
    </section>
  );
}
