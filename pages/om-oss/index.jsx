import EmployeGrid from "../../components/employees/employee-grid";
import Hero from "../../components/layout/hero";
import ContactImageModule from "../../components/modules/contact-image-module";
import ContactModule from "../../components/modules/contact-module";
import { employees } from "../../dummy-data";
import LeaderGrid from "../../components/employees/leader-grid";

export default function aboutPage() {
  const employee = employees();

  return (
    <>
      <Hero
        heading="Om oss"
        message="Vi hjelper kundene våre med å utnytte kraften i personalisert kommunikasjon"
      />

      <section className="px-5 py-6 bg-oculos-lightersage">
        <LeaderGrid info={employee} />
      </section>

      <section className="px-5 py-6">
        <EmployeGrid info={employee} />
      </section>

      <section className="px-5 py-6 bg-oculos-piglet">
        <ContactModule />
      </section>

      <section className="px-5 py-6">
        <ContactImageModule />
      </section>
    </>
  );
}