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

  const bgcolor = bgContact.bgcolor;
  const bgmodule = bgModule.bgcolor;
  const url = contmedia?.data?.attributes?.url;

  return (
    <section
      className="py-5 my-4" style={{ backgroundColor: `${background[bgmodule]}`}}
    >
    <div
      className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]"
    >
      <div className="col-span-3 md:col-span-6 lg:col-span-8 lg:col-start-3">
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
      </div>
    </section>
  );
}