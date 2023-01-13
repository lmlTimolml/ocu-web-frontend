import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import Layout from "../../components/layout/layout";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/eventer/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Layout>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </Layout>
  );
}

export default AllEventsPage;

