import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Button from "../ui/event-button";
import Image from "next/image";

function EventItem({ title, image, date, time, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const eventLink = `/eventer/${id}`;

  return (
    <li className="grid gap-x-4 gap-y-0 grid-cols-1 sm:grid-cols-3 mt-4 bg-transparent antialiased">
      <div className="aspect-square h-[100%]">
        <Image src={"/" + image} alt={title} width={1200} height={1200} />
      </div>
      <div className="flex flex-col justify-between p-5 sm:col-start-2 sm:col-span-2 bg-oculos-harmony">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-lg mb-5">{title}</h2>
          <div className="flex mb-3">
            <FaCalendar size="15" className="flex self-center mr-2" />
            <time className="text-base">{humanReadableDate}</time>
            <FaClock size="15" className="flex self-center mx-2" />
            <time className="text-base">{time}</time>
          </div>
          <div className="flex mb-3">
            <FaMapMarkerAlt size="15" className="flex self-center mr-2" />
            <address className="text-base">{formattedAddress}</address>
          </div>
        </div>

        <Button link={eventLink}>Explore Event</Button>
      </div>
    </li>
  );
}

export default EventItem;
