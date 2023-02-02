import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumbs";
import BreadcrumbItem from "./breadcrumb-item";

export default function Hero({ image, heading, message }) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
      <header className="flex items-center h-screen relative">
        {/* Overlay */}
        <Image
          style={{ objectFit: "cover" }}
          fill
          priority
          src="/images/sommer03.jpg"
          alt={heading}
        />
        <div className="absolute top-0 w-full h-screen bg-black/40 z-[2]" />
        <div className="text-white z-[2] mt-[-5rem] mx-5 lg:mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold antialiased">{heading}</h2>
          <p className="py-5 text-xl antialiased">{message}</p>
          <button className="px-6 hover:cursor-square py-2 border antialiased hover:bg-white hover:text-black ease-linear duration-150">
            CTA
          </button>
        </div>
      </header>
<section className="px-5 bg-oculos-lightersage mx-auto sticky top-[94px]">
<Breadcrumb>
        <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
              {breadcrumb.label}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
      </section>
    </>
  );
}
