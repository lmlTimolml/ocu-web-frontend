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
  const cat = category.data.attributes.category;

  return (
    <div className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3">
       {imgurl && <Image height={540} width={960} src={imgurl} alt={alt} />}
      <div
        className="flex flex-col justify-start w-full pt-2"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <div className="flex flex-wrap items-center mb-2 text-gray-500">
        {date && <p className="mr-2">{date}</p>}
        {category.data && <p className="mr-2">{cat}</p>}
        
          {tags?.data?.map((tag, i) => {
            return <Tag key={i} tag={tag} />
          })}
      </div>
        {articleName &&
          <h3 className="my-2 text-2xl font-bold truncate">{articleName}</h3>
        }
        {ingress && <p className="mb-4 line-clamp-4">{ingress}</p>}

        {label &&
          <div className="mb-4">
            <Button
              label={label}
              txt={txt}
              link={`/inspirasjon/${slug}`}
              style={style}
            />
          </div>
        } 
          </div>
      </div>
  );
}
