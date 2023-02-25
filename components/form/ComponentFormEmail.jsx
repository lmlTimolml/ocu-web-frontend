
export default function ComponentFormEmail({
  placeholder,
  required,
  fieldname,
}) {
  

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm mb-1">{fieldname}</label>
      <input type="email" id="email" name="email" className="w-full h-11 outline-none border border-gray-400 pl-2" value={placeholder} required />
    </div>
  );
}
