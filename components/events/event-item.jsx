import {
  FaCalendar,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, time, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className="grid gap-x-4 gap-y-0 grid-cols-1 sm:grid-cols-3 mt-4 bg-transparent antialiased">
      <div className="aspect-square h-[100%]">
        <img src={"/" + image} alt={title} />
      </div>
      <div className="p-5 sm:col-start-2 sm:col-span-2 bg-oculos-200">
        <div className="">
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
          <Button link={exploreLink}>Explore Event</Button>
      </div>
    </li>
  );
}

export default EventItem;
