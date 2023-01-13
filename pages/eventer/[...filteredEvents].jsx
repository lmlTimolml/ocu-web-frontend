import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/event-list";
import Layout from "../../components/layout/layout";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.filteredEvents;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid filter, please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Layout>
        <EventSearch onSearch={findEventsHandler} />
        <p className="center">No events found for the selected dates</p>
      </Layout>
    );
  }

  function findEventsHandler(year, month) {
    const fullPath = `/eventer/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Layout>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={filteredEvents} />
    </Layout>
  );
};

export default FilteredEventsPage;
