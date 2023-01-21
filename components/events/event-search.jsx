import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className="text-base flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 antialiased bg-oculos-harmony max-w-[960px] mx-auto" onSubmit={submitHandler} >
      <div className="flex flex-col sm:flex-row justify-between sm:w-[70%]">
        <div className="flex justify-between items-center">
          <label htmlFor="year" className="mr-3 font-bold">Årstall</label>
          <select id="year" ref={yearInputRef} className="bg-transparent">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="month" className="mr-3 font-bold">Måned</label>
          <select id="month" ref={monthInputRef} className="bg-transparent">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button className="group/btn w-fit flex items-center box-border px-6 py-2 border-2 border-oculos-lightsage bg-oculos-lightsage antialiased hover:bg-oculos-harmony ease-linear duration-300 relative">
            <p className="text-base group/name group-hover/btn:ml-[-10px] group-hover/btn:px-[5px] ease-linear duration-150">Search Events</p><FaArrowRight size="15" className="absolute mt-[1px] right-3 group/arrow opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-2 ease-linear duration-150" /></button>
    </form>
  );
}

export default EventSearch;
