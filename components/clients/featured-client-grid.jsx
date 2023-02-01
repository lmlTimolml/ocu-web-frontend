import ClientCard from "./client-card";

export default function FeaturedClientGrid({ info }) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-transparent antialiased max-w-[960px] mx-auto">

      {info.map(client => {
        if (client.isFeatured === true) 
          return (
        <ClientCard
          key={client.id}
          id={client.id}
          image={client.image}
          alt={client.alt}
          title={client.title}
          description={client.description}
          link={client.link}
        />
          )})}
    </ul>
  );
}
