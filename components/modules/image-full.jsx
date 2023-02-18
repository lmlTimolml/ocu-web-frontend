import Image from "next/image";

export default function ImageFull({ media }) {
  /* const {
    data: { attributes },
  } = media; */

  console.log("Hæh? Fra ImageFullModule");

  return (
    media?.data?.map((media, i) => (
    <section key={i} className={`max-full py-10`}>
    <section key={i} className="max-w-[960px] mx-auto relative aspect-video">
      
      <div className="block">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={media.attributes.url}
          alt={media.attributes.alternativeText}
        />
      </div>

    </section>
      <div>
        <figcaption className="max-w-[960px] mx-auto mt-2 antialiased italic text-[0.75rem] relative">
          {media.attributes.caption}
        </figcaption>
      </div>
    </section>
  ))
  );
}
