import Image from "next/image";
import { customColors } from "../../customdata";
import dynamic from "next/dynamic";

const background = customColors();

export default function FeaturedLeft({ eventContent }) {
  const {
    title,
    description,
    logo,
    button,
    isFeatured,
    id,
    bgEvent: { bgcolor },
  } = eventContent.attributes;

  console.log("bgC", bgcolor);
  return (
    <div
      key={id}
      className="flex flex-col antialiased p-3 md:p-5 my-5 w-full md:w-[48%]" style={{ backgroundColor: `${background[bgcolor]}`}}
    >
      <div className="flex justify-between content-between mb-7">
        <h1 className="font-bold text-2xl mb-5 self-center w-[70%]">{title}</h1>

        <Image
          src={logo.data.attributes.url}
          alt={logo.alternativeText}
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="font-medium text-lg mb-10">{description}</p>
        {button && 
          <div className="flex w-full items-center">
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
          </div>
        }
      </div>
    </div>
  );
}
