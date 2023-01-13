import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";

const clientProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <Layout>
      <h1>Project Page for specific project { router.query.clientprojectid } of specific client { router.query.clientid }  </h1>
    </Layout>
  );
}

export default clientProjectPage;
