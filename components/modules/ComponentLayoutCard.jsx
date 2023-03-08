import Image from "next/image";
import dynamic from "next/dynamic";
import { customColors } from "../../customdata";

const background = customColors();

export default function Card({
  client: {title,
  img,
  date,
  tag,
  content,
  alt,
  id,
  slug,
  button: { label, url, txt, style },
  bgColor: {bgcolor}},
  featuredClient
}) {
            const Button = dynamic(() => import(`../buttons/${style}`), {
              ssr: false,
            });

            let clientlink;
            if (Array.isArray(featuredClient)) {
              clientlink = featuredClient[0].attributes.slug;
            } else {
              clientlink = featuredClient.attributes.slug;
            }
            
            console.log("Kundekort", clientlink);
  
            const imgurl = img?.data.attributes.url;

  return (
      <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3">
        {imgurl && <Image height={540} width={960} src={imgurl} alt={alt} />}
        <div
          className="flex flex-col justify-start w-full p-6" style={{ backgroundColor: `${background[bgcolor]}`}}
        >
          {date && (
            <p className="mb-4">{date}</p>
          )}
          {title && (
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          )}
          {content && (
            <p className="mb-4">{content}</p>
          )}

{ label && <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
         <Button
                label={label}
                txt={txt}
                link={`/clients/${clientlink}`}
                url={url}
                style={style}
              />
          </div>}
        </div>
      </div>

  );
}