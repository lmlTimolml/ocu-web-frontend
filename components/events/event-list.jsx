import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul className="max-w-[960px] mx-auto">
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          time={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
