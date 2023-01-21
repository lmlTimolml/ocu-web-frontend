import Link from "next/link";
import Hero from "../../components/layout/hero";

const clientsPage = () => {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  console.log(clients.name);
  return (
    <>
      <Hero heading="Kunder" message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon" />
      <h1>Kunder</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/kunder/[clientid]",
                query: { clientid: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default clientsPage;
