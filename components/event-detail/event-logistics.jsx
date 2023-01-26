import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ModuleImgLftQtRgt from "../layout/module-imglft-qtrgt";

function EventLogistics({ date, time, address, image, imageAlt }) {

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <>
      <ModuleImgLftQtRgt />
    <section className="max-w-[960px] mx-auto mt-5">
      <div className="flex">
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className="">
      <FaCalendar size="15" className="flex self-center mr-2" />
          <time>{humanReadableDate}</time>
          <FaClock size="15" className="flex self-center mx-2" />
            <time className="text-base">{time}</time>
            <FaMapMarkerAlt size="15" className="flex self-center mr-2" />
          <address>{addressText}</address>
        
      </ul>
    </section>
    </>
  );
}

export default EventLogistics;
