import ImageTwoCol from "../modules/image-2-col";
import EmployeeCard from "./employee-card";

export default function LeaderGrid({ info }) {
  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[960px] mx-auto" style={{ backgroundColor: `${background[bgcolor]}`}}>
      <li className="col-span-2 h-full min-h-[300px] relative">
        <ImageTwoCol />
      </li>

      {info.map(employee => {
        if (employee.isLeader === true) 
        return [
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          title={employee.title}
          alt={employee.alt}
          image={employee.image}
          email={employee.email}
        />
]      })}
    </ul>
  );
}
