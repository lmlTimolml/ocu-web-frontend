import Image from "next/image";
import dynamic from "next/dynamic";
import Tag from "../ui/tag";
import { customColors } from "../../customdata";

const background = customColors();

export default function ArticleCard({ article }) {
  const Button = dynamic(() => import(`../buttons/${style}`), {
    ssr: false,
  });

  const {
    articleName,
    ingress,
    date,
    tags,
    category,
    slug,
    img,
    alt,
    button: {label,txt,link,style},
    bgCard: {bgcolor}
  } = article.attributes;

  const imgurl = img.data.attributes.url;
  
  console.log("Artikkelkort", tags);

  return (
    <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3">
       {imgurl && <Image height={540} width={960} src={imgurl} alt={alt} />}
      <div
        className="flex flex-col justify-start w-full mt-2"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <div className="flex mb-2">
        {category && <p>{category}</p>}
        {date && <p>{date}</p>}
        </div>
        {tags && <div className="flex mb-2">
          
          {tags.data?.map((tag, i) => {
            return <Tag key={i} tag={tag} />
          })}
          
          </div>}
        </div>
        {articleName && (
          <h2 className="mb-2 text-2xl font-bold">{articleName}</h2>
        )}
        {ingress && <p className="mb-4 line-clamp-6">{ingress}</p>}

        {label && (
          <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button
              label={label}
              txt={txt}
              link={`/inspirasjon/${slug}`}
              style={style}
            />
          </div>
        )} 
      </div>
  );
}
