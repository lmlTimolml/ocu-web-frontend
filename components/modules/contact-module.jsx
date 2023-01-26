
import Button from "../ui/featured-cta-button"


export default function ContactModule({ id, content, link }) {
  const contactLink = `/kontakt/${id}`;
  return (
    <section className="antialiased max-w-[960px] mx-auto">
    <div className="flex flex-col justify-start items-center w-full p-6 bg-oculos-lightsage">
      <h2 className="mb-6 text-2xl sm:text-3xl font-black">Lorem ipsum dolor sit amet?</h2>
    <Button link={contactLink} className="mb-4">Ta en prat med Kristian</Button>
    </div>
      </section>
  )
}
