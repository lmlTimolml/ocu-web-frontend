
import Image from "next/image";



export default function ArticleCard({ track }) {
  const { title, image, description, id } = track;

  const eventLink = `/inspirasjon/${id}`;

  return (
    <li className="grid gap-x-4 gap-y-0 grid-cols-1 sm:grid-cols-3 mt-4 bg-transparent antialiased">
      <div className="aspect-square h-[100%]">
        <Image src={"/" + image} alt={title} width={1200} height={1200} />
      </div>
      <div className="flex flex-col justify-between p-5 sm:col-start-2 sm:col-span-2 bg-oculos-harmony" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-lg mb-5">{title}</h2>
          <div className="flex mb-3">
            {description}
          </div>
          <div className="flex mb-3">
          </div>
        </div>

      </div>
    </li>
  );
}