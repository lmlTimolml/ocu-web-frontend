export default function ComponentFormSwitch({
    placeholder,
    required,
    fieldname,
  }) {
    
    return (
<div className="flex py-2 mt-6 md:my-4">
            <div className="flex items-center">
              <input className="mr-2 h-8 w-14 appearance-none rounded-[1rem] bg-[rgba(0,0,0,0.25)] outline-none after:mt-[0.13rem] after:ml-[0.12rem] after:absolute after:z-[2] after:h-7 after:w-7 after:rounded-full after:border-none after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-oculos-aqua checked:after:absolute checked:after:z-[2] checked:after:ml-[1.58rem] checked:after:h-7 checked:after:w-7 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer"
                type="checkbox"
                role="switch"
                id="selectAll"
              />
              <label
                className="pl-[0.15rem] hover:cursor-pointer"
                htmlFor="selectAll"
              >
                {placeholder}
              </label>
            </div>
          </div>
    );
  }