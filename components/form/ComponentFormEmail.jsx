import "../../pages/api/newsletter";
import { useState } from "react";

export default function ComponentFormEmail({
  placeholder,
  required,
  fieldname,
}) {
  const [enteredEmail, setEnteredEmail] = useState("");

  console.log("EPOST", enteredEmail);

  return (
    <div className="flex flex-col">
      {fieldname && (
        <label htmlFor="email" className="text-sm mb-1">
          {fieldname}
        </label>
      )}
      <input
        type="email"
        id="email"
        name="email"
        className="text-sm w-full h-11 outline-none border border-gray-400 pl-2"
        placeholder={placeholder}
        required
        value={enteredEmail}
        onChange={(event) => setEnteredEmail(event.target.value)}
      />
    </div>
  );
}
