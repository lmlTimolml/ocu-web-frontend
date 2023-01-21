import { useRouter } from "next/router";

const clientProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <>
      <h1>Project Page for specific project { router.query.clientprojectid } of specific client { router.query.clientid }  </h1>
    </>
  );
}

export default clientProjectPage;
