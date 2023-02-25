
export default function ComponentFormLastname({
    placeholder,
    required,
    fieldname,
  }) {
    
  
    return (
      <div className="flex flex-col">
        <label htmlFor="lname" className="text-sm mb-1">{fieldname}</label>
        <input type="text" id="lname" name="lname" className="w-full h-11 outline-none border border-gray-400 pl-2" value={placeholder} />
      </div>

    );
  }
  