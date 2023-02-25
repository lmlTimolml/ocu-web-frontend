import CareerCard from "./career-card";

export default function CareerGrid({ info }) {
  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 max-w-[960px] mx-auto" style={{ backgroundColor: `${background[bgcolor]}`}}>

      {info.map((careers) => (
        <CareerCard
          key={careers.id}
          id={careers.id}
          title={careers.title}
          description={careers.description}
          image={careers.image}
          alt={careers.alt}
          isFeatured={careers.isFeatured}
          link={careers.link}
        />
      ))}
    </ul>
  );
}
