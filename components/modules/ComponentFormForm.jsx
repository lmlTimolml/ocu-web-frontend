import "../../pages/api/newsletter";
import { useState } from "react";
import { customColors } from "../../customdata";

const background = customColors();

export default function Form({ form }) {
  const { FormName, FormDescription, bgModule, bgForm, Formfields, slug } =
    form.data.attributes;

  const bgmodule = bgModule.bgcolor;
  const bgcolor = bgForm.bgcolor;

  // handle the submit request
  /* const [enteredFname, setEnteredFname] = useState("");
  const [enteredLname, setEnteredLname] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [checkedConsent, setCheckedConsent] = useState("");
  const [checkedEmail, setCheckedEmail] = useState("");
  const [checkedMobile, setCheckedMobile] = useState(""); */

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch("../../pages/api/newsletter", {
      method: "POST",
    });
  }

  // fetch formfields
  const formElements = Formfields?.map((formElement) => {
    const Formfield = require(`../form/${formElement.__typename}`).default;
    return (
      <Formfield
        key={formElement.id}
        {...formElement}
      />
    );
  });

  return (
    <section
      className="py-5 my-5"
      style={{ backgroundColor: `${background[bgmodule]}` }}
    >
      <div
        className="p-10 text-base max-w-[960px] mx-5 lg:mx-auto"
        style={{ backgroundColor: `${background[bgcolor]}` }}
      >
        <form
          onSubmit={sendMessageHandler}
          id={slug}
          data-toggle="validator"
          role="form"
          className="flex flex-col"
        >
          <div className="p-2">
            {FormName && (
              <h2 className="text-2xl sm:text-3xl font-black">{FormName}</h2>
            )}
            {FormDescription && (
              <p className="text-md sm:text-lg">{FormDescription}</p>
            )}
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-flow-col md:grid-rows-5 h-auto md:max-h-[400px]">
            {formElements?.map((formElements, i) => {
              return (
                <div key={i} className="p-2 sm:col-span-1">
                  {formElements}
                </div>
              );
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
