import Button from "../ui/text-button";
import ClientLogo from "../clients/client-logo";

export default function HeadingTextLink({ content }) {

const {
  title,
  description,
  link,
  clientLogo,
} = content;

console.log(content);
  return (
    <section className="antialiased max-w-[960px] mx-auto">
       <div><h1 className="font-bold text-5xl mb-5">{title}</h1>
      <p className="font-medium text-2xl mb-5">{description}</p></div>
      <ul className="grid gap-x-4 gap-y-4 grid-cols-2 sm:grid-cols-4 mt-4 bg-transparent antialiased max-w-[960px] mx-autod">
    <ClientLogo clientLogo={clientLogo} /> 
    </ul>
    </section>
  );
}
