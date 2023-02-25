
export default function ComponentFormFirstname({
    placeholder,
    required,
    fieldname,
  }) {
    
  
    return (
      <div className="flex flex-col">
        <label htmlFor="fname" className="text-sm mb-1">{fieldname}</label>
        <input type="text" id="fname" name="fname" className="w-full h-11 outline-none border border-gray-400 pl-2" value={placeholder} />
      </div>
    );
  }
  