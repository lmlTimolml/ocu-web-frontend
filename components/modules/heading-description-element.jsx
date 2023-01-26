export default function HeadingTextelement({ title, description }) {
  return (
    <section className="antialiased before:content-corner-tl before:w-12 sm:before:w-16 before:block max-w-[960px] mx-auto">
        <div className="mt-[-1.5rem] mx-12">
      <h1 className="font-bold text-5xl mb-5">{title}</h1>
      <p className="font-medium text-2xl">{description}</p>
      </div>
    </section>
  );
}
