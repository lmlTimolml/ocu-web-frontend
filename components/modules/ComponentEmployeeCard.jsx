import Image from "next/image";
import Icon from "../ui/icon";
import { customColors } from "../../customdata";

const background = customColors();

export default function EmployeeCard({ employee }) {
  const {
    name,
    title,
    img,
    alt,
    contact,
    bgCard: { bgcolor },
  } = employee.attributes;

  const imgurl = img.data[0].attributes.url;

  return (
    <div
      className="flex flex-col h-full justify-between ease-linear duration-150"
      style={{ backgroundColor: `${background[bgcolor]}` }}>
    <div>
      <Image height={540} width={540} src={imgurl} alt={alt} />
      <div className="flex flex-col w-full p-3 mb-5">
        {name && <h2 className="font-bold">{name}</h2>}
        {title && <p className="sm:text-sm">{title}</p>}
      </div>
      </div>
      <div className="flex pl-3">
        {contact?.map((contact, i) => {
          return <Icon key={i} contact={contact} />;
        })}
      </div>
    </div>
  );
}
