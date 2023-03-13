import Image from "next/image";
import Link from "next/link";
import EmployeeCard from "./ComponentEmployeeCard";
import { customColors } from "../../customdata";

const background = customColors();

export default function EmployeeGrid({img, alt, employees, bgColor: {bgcolor}}) {

  console.log("Kundegrid", bgcolor);


  /* const imgurl = img.data[0].attributes.url; */
  
  return (
    <section
        className="py-5"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <div className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]">
        
        <div className="col-span-3 md:col-span-6 lg:col-start-3 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {img && img.data && img.data[0] && img.data[0].attributes && img.data[0].attributes.url ? (
         <div className="col-span-2 relative">
          <Image style={{ objectFit: "cover" }} fill src={img.data[0].attributes.url} alt={alt} />
          </div>
) : null}
            {employees?.data?.map((employee, i) => {
              return <EmployeeCard key={i} employee={employee} />;
            })}
          </div>
        </div>
        
      </section>
  );
}
