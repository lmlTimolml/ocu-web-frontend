import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import Hero from "../../components/layout/hero";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/eventer/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <Hero heading="Eventer" message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon" />
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

