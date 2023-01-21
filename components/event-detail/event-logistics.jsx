import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, time, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
      <FaCalendar size="15" className="flex self-center mr-2" />
          <time>{humanReadableDate}</time>
          <FaClock size="15" className="flex self-center mx-2" />
            <time className="text-base">{time}</time>
            <FaMapMarkerAlt size="15" className="flex self-center mr-2" />
          <address>{addressText}</address>
        
      </ul>
    </section>
  );
}

export default EventLogistics;
