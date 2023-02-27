import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumbs";
import BreadcrumbItem from "./breadcrumb-item";

export default function Hero({ heroTitle, heroDescription, heroImage, alt, breadcrumbpath }) {
  
  /* Breadcrumbs from Strapi

  const {
    breadcrumb } = breadcrumbpath;

  */

  /* Breadcrumbs */

console.log("hero", alt);

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
      <header className="flex items-center h-[600px] relative">
        {/* Overlay */}
        <Image
          style={{ objectFit: "cover" }}
          fill
          priority
          src={heroImage.data.attributes.url}
          alt={alt}
        />
        <div className="absolute top-0 w-full h-[600px] bg-gradient-to-r from-black/80 to-transparent z-[2]" />
        <div className="text-white z-[2] mx-5 lg:mx-auto min-w-3xl max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-bold">{heroTitle}</h2>
          <p className="py-5 text-lg sm:text-xl">{heroDescription}</p>
        </div>
      </header>
      <section className="px-5 bg-white mx-auto">
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
