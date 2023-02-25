import Image from "next/image";
import { customColors } from "../../customdata";
import dynamic from "next/dynamic";

const background = customColors();

export default function FeaturedRight({ articleContent }) {
  
  const { 
    title, description, image, button, isFeatured, id, bgArticle: {bgcolor} } =
    articleContent.attributes; 

    
console.log("featR", button);
    return (
      
<div key={id} className="flex antialiased content-center align-middle justify-between my-5 w-full md:w-[48%]" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="flex justify-between">
        <div className="flex flex-col justify-between w-[50%] p-5">
          <h1 className="font-bold text-2xl mb-5">{title}</h1>
          <p className="font-medium text-lg mb-10">{description}</p>
          
          { button && <div className="flex w-full items-center">
          {button?.map((btn, i) => {
            const { label, link, txt, style } = btn;
            const Button = dynamic(() => import(`../buttons/${style}`), {
              ssr: false,
            });
            return (
              <Button
                key={i}
                label={label}
                txt={txt}
                link={link}
                style={style}
              />
            );
          })}
          </div>}
        </div>
          <div className="flex flex-col justify-center w-[48%] relative">
          <Image src={image.data[0].attributes.url} alt={image.alternativeText} fill style={{objectFit: "cover"}} />
          </div>
          </div>
      </div>
    );
}
