import Image from "next/image";
import dynamic from "next/dynamic";
import { customColors } from "../../customdata";

const background = customColors();

export default function Card({ client }) {
  const Button = dynamic(() => import(`../buttons/${style}`), {
    ssr: false,
  });

  const {
    clientName,
    ingress,
    date,
    slug,
    img,
    alt,
    button: {label,txt,link,style},
    bgCard: {bgcolor}
  } = client.attributes;

  const imgurl = img.data.attributes.url;

  console.log(imgurl);

  return (
    <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3">
       {imgurl && <Image height={540} width={960} src={imgurl} alt={alt} />}
      <div
        className="flex flex-col justify-start w-full p-6"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        {date && <p className="mb-4">{date}</p>}
        {clientName &&
          <h2 className="mb-2 text-2xl font-bold">{clientName}</h2>
        }
        {ingress && <p className="mb-4 line-clamp-6">{ingress}</p>}

        {label &&
          <div>
            <Button
              label={label}
              txt={txt}
              link={`/kunder/${slug}`}
              style={style}
            />
          </div>
        } 
      </div>
    </div>
  );
}
