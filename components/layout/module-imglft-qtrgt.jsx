import React from "react";
import Image from "next/image";

// Main module: Fullsize image left col / Quote styled text right col

export default function ModuleImgLftQtRgt() {
  return (
    <section className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-4 mt-4 bg-transparent antialiased">
      <section className="sm:col-start-1 sm:col-end-3 h-24 sm:h-full bg-slate-200 sm:bg-slate-500">
        <Image
          src="/images/coding-event.jpg"
          width={1200}
          height={1200}
          alt="image alt"
        />
      </section>
      <section className="bg-oculos-oip sm:col-start-3 sm:col-end-5 before:content-corner-tl before:w-12 sm:before:w-16 before:block">
        <h1 className="text-4xl font-bold text-oculos-aqua mt-[-14px] ml-8 after:content-underline after:block after:mt-[-10px] after:ml-2">
          Rådgivning og strategi
        </h1>
        <p className="m-8 mt-4 text-2xl leading-8 w-64">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore.
        </p>
      </section>
    </section>
  );
}
