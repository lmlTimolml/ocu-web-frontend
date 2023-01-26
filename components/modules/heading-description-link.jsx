import Button from "../ui/text-button";



export default function HeadingTextLink({ title, description, link, clientid }) {

  const pageLink = `/kunder/${clientid}`;

  return (
    <section className="antialiased max-w-[960px] mx-auto">
      <div><h1 className="font-bold text-5xl mb-5">{title}</h1>
      <p className="font-medium text-2xl mb-5">{description}</p></div>
      <Button link={pageLink}>{link}</Button>
    </section>
  );
}
