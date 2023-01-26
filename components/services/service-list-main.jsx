import ServiceItemsMain from "./service-item-main";

export default function ServiceListMain({items}) {
  return (
    <ul className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-auto my-8">
      {items.map((service) => (
        <ServiceItemsMain
          key={service.id}
          id={service.id}
          title={service.title}
          bulletpoints={service.bulletpoints} 
          link={service.link}
        />
      ))}
    </ul>
  );
}
