import Link from "next/link";
import Layout from "../../components/layout/layout";

const clientsPage = () => {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  console.log(clients.name);
  return (
    <Layout>
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
    </Layout>
  );
}

export default clientsPage;
