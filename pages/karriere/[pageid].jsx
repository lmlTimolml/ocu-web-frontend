import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";

const newCareerPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <Layout>
      <h1>{router.query.pageid}</h1>
    </Layout>
  );
}

export default newCareerPage;
