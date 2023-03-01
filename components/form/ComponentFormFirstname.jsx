import "../../pages/api/newsletter";
import { useState } from "react";

export default function ComponentFormFirstname({
  placeholder,
  required,
  fieldname,
}) {
  const [enteredFname, setEnteredFname] = useState("");

  console.log("FORNAVN", enteredFname);

  return (
    <div className="flex flex-col">
      {fieldname && (
        <label htmlFor="fname" className="text-sm mb-1">
          {fieldname}
        </label>
      )}
      <input
        type="text"
        id="fname"
        name="fname"
        required
        value={enteredFname}
        onChange={(event) => setEnteredFname(event.target.value)}
        className="text-sm w-full h-11 outline-none border border-gray-400 pl-2"
        placeholder={placeholder}
      />
    </div>
  );
}
