export default function HeadingTextelement({ serviceHeadingComponent }) {

  const {
    serviceHeading,
    serviceContent,

  } = serviceHeadingComponent;

  return (
    <section className="antialiased before:content-corner-tl before:w-12 sm:before:w-16 before:block py-10 max-w-[960px] mx-5 md:mx-auto">
        <div className="mt-[-1.5rem] mx-12">
      <h1 className="font-bold text-5xl mb-5">{serviceHeading}</h1>
      <p className="font-medium text-2xl">{serviceContent}</p>
      </div>
    </section>
  );
}
