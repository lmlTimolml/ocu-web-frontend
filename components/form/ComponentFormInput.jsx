import "../../pages/api/newsletter";
import { useState } from "react";

export default function ComponentFormInput({
  fieldname,
  fieldID,
  placeholder,
}) {
  const [enteredInput, setEnteredInput] = useState("");

  console.log("INPUT", enteredInput);

  return (
    <>
      <div className="flex flex-col">
        {fieldname && (
          <label htmlFor={fieldID} className="text-sm mb-1">
            {fieldname}
          </label>
        )}
        <input
          type="text"
          id={fieldID}
          name={fieldID}
          value={enteredInput}
          onChange={(event) => setEnteredInput(event.target.value)}
          className="text-sm w-full h-11 outline-none border border-gray-400 pl-2"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
