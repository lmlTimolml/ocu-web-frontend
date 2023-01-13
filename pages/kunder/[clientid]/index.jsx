import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";

const mainClientPage = () => {
    const router = useRouter();
  
    console.log(router.pathname);
    console.log(router.query);

    function loadProjectHandler() {
        // load data...
        router.push({
            pathname: "/kunder/[clientid]/[clientprojectid]",
            query: { clientid: "Hardcoded Max", clientprojectid: "Hardcoded Project A" },
        });
    }
  return (
    <Layout>
      <h1>Main Page of { router.query.clientid }</h1>
      <button onClick={ loadProjectHandler }>Load Project A</button>
    </Layout>
  );
}

export default mainClientPage;
