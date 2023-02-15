import Image from "next/image";
import Button from "../ui/featured-cta-button";

export default function ContactImageModule({ media }) {
  
  
  const {
    data: { attributes},

  } = media;

  console.log("Fra ContactImageModule", media);

  return (
    /* contact?.map((x, i) => ( */
    <section className="antialiased max-w-[960px] mx-auto">
      <Image
        height={540}
        width={960}
        src="/images/extrovert-event.jpg"
        alt="image alt"
      />
      <div className="flex flex-col justify-start items-center w-full p-6 bg-oculos-lightsage">
        <h2 className="mb-6 text-2xl sm:text-3xl font-black">
          Lorem ipsum dolor sit amet?
        </h2>
        <Button link="/" className="mb-4">
          Ta en prat med Kristian
        </Button>
      </div>
    </section>
    /* )) */
  );
}
