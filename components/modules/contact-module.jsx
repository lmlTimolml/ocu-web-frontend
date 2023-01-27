
import Button from "../ui/outline-button"


export default function ContactModule({ id, content, link }) {
  const contactLink = `/kontakt/${id}`;
  return (
    <section className="antialiased max-w-[960px] mx-auto">
    <div className="flex flex-col justify-start items-center w-full p-6 bg-oculos-peppa">
      <h2 className="mb-6 text-2xl sm:text-3xl font-black">{content="Karriere i Oculos?"}</h2>
    <Button link={contactLink} className="mb-4">{link="Se her!"}</Button>
    </div>
      </section>
  )
}
