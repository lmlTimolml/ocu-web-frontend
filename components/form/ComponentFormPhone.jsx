
export default function ComponentFormPhone({
  placeholder,
  required,
  fieldname,
}) {
  

  return (
    <div className="flex flex-col">
      <label for="phone" className="text-sm mb-1">{fieldname}</label>
      <input type="phone" id="phone" name="phone" className="w-full h-11 outline-none border border-gray-400 pl-2" value={placeholder} />
    </div>
  );
}
