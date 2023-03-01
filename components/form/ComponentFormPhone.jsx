import "../../pages/api/newsletter";
import { useState } from "react";

export default function ComponentFormPhone({
  placeholder,
  required,
  fieldname,
}) {
  const [enteredPhone, setEnteredPhone] = useState("");

  console.log("TLF", enteredPhone);

  return (
    <div className="flex flex-col">
      {fieldname && (
        <label htmlFor="phone" className="text-sm mb-1">
          {fieldname}
        </label>
      )}
      <input
        type="phone"
        id="phone"
        name="phone"
        value={enteredPhone}
        onChange={(event) => setEnteredPhone(event.target.value)}
        className="text-sm w-full h-11 outline-none border border-gray-400 pl-2"
        placeholder={placeholder}
      />
    </div>
  );
}
