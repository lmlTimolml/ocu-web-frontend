import "../../pages/api/newsletter";
import { useState } from "react";

export default function ComponentFormLastname({
  placeholder,
  required,
  fieldname,
}) {
  const [enteredLname, setEnteredLname] = useState("");

  console.log("ETTERNAVN", enteredLname);

  return (
    <div className="flex flex-col">
      {fieldname && (
        <label htmlFor="lname" className="text-sm mb-1">
          {fieldname}
        </label>
      )}
      <input
        type="text"
        id="lname"
        name="lname"
        required
        value={enteredLname}
        onChange={(event) => setEnteredLname(event.target.value)}
        className="text-sm w-full h-11 outline-none border border-gray-400 pl-2"
        placeholder={placeholder}
      />
    </div>
  );
}
