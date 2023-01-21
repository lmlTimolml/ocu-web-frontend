import { useRouter } from "next/router";

export default function newCareerPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <>
      <h1>{router.query.pageid}</h1>
    </>
  );
}

