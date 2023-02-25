import { customColors } from "../../customdata";

const background = customColors();

export default function Form({ form }) {
  const { FormName, FormDescription, bgModule, bgForm, Formfields, slug } =
    form.data.attributes;

    const bgmodule = bgModule.bgcolor;
    const bgcolor = bgForm.bgcolor;

  // fetch formfields
  const formElements = Formfields?.map((formElement) => {
    const Formfield = require(`../form/${formElement.__typename}`).default;
    return <Formfield key={formElement.id} {...formElement} />;
  });

  return (
    <section
      className="py-5 my-5" style={{ backgroundColor: `${background[bgmodule]}`}}
    >
      <div className="p-10 text-base max-w-[960px] mx-5 lg:mx-auto" style={{ backgroundColor: `${background[bgcolor]}`}}>
        <form
          id={slug}
          data-toggle="validator"
          role="form"
          className="flex flex-col"
        >
          <div className="p-2">
            { FormName && <h2 className="text-2xl sm:text-3xl font-black">{FormName}</h2>}
            { FormDescription && <p className="text-md sm:text-lg">{FormDescription}</p>}
          </div>
          <div className="flex flex-col justify-between flex-wrap h-auto md:max-h-[450px]">

          {formElements?.map((formElements, i) => {
            return <div key={i} className="p-2 flex-grow-0 md:w-[45%]">{formElements}</div>;
          })}

        </div>
        </form>

        {/* <div>
          <h2>Takk for registrering!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            laborum? Ea aut accusantium, a veniam quas, fuga, rerum unde
            expedita iste laborum reiciendis dignissimos accusamus perspiciatis
            dolore pariatur beatae ex?
          </p>
        </div> */}
      </div>
    </section>
  );
}
