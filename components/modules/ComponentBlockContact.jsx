import Image from "next/image";
import { customColors } from "../../customdata";
import dynamic from "next/dynamic";

const background = customColors();

export default function ContactBlock({
  heading,
  alt,
  contmedia,
  button,
  bgContact,
  bgModule,
}) {

  const { label, link, txt, style } = button[0];
  const bgcolor = bgContact.bgcolor;
  const bgmodule = bgModule.bgcolor;
  const url = contmedia?.data?.attributes?.url;

  console.log("Button", style);

  return (
    <section
      className="py-5 my-4" style={{ backgroundColor: `${background[bgmodule]}`}}
    >
      <div className="max-w-[960px] mx-5 lg:mx-auto">
        {url && <Image height={540} width={960} src={url} alt={alt} />}
        <div
          className="flex flex-col justify-start items-center w-full p-6" style={{ backgroundColor: `${background[bgcolor]}`}}
        >
          {heading && (
            <h2 className="mb-6 text-2xl sm:text-3xl font-black">{heading}</h2>
          )}
{ button && <div className="flex justify-center w-full items-center">
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
      </div>
    </section>
  );
}