
export default function ComponentFormInput({
  fieldname,
  fieldID,
  placeholder,
}) {
  

  return (
    <>
      
    <div className="flex flex-col">
    <label htmlFor={fieldID} className="text-sm mb-1">{fieldname}</label>
    <input type="text" id={fieldID} name={fieldID} className="w-full h-11 outline-none border border-gray-400 pl-2" value={placeholder} />
  </div>
    </>
    
  );
}
