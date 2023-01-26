export default function HeadingText({ title, description }) {
  return (
    <section className="antialiased max-w-[960px] mx-auto">
      <div><h1 className="font-bold text-5xl mb-5">{title}</h1>
      <p className="font-medium text-2xl">{description}</p></div>
    </section>
  );
}
