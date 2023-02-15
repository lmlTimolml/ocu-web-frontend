import EmployeeCard from "./employee-card";

export default function EmployeGrid({ info }) {
  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-transparent antialiased max-w-[960px] mx-auto">
      

      {info.map(employee => {
        if (employee.isLeader === false) 
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
         ] })}
    </ul>
  );
}
