export default function BulletList({ title, bulletpoints }) {
  return (
    <section className="antialiased before:content-line before:block before:absolute before:mt-[-38px] before:ml-12 md:before:ml-9 lg:before:ml-12 w-full">
      <div className="ml-12 md:ml-9 lg:ml-12">
          <h2 className="font-bold text-2xl sm:text-3xl mb-2">
            {title}
          </h2>
          <ul className="text-black marker:text-oculos-aqua text-lg list-square pl-4 group-hover/main-parent:text-white">
            <li>{bulletpoints}</li>
            <li>{bulletpoints}</li>
            <li>{bulletpoints}</li>
            <li>{bulletpoints}</li>
            <li>{bulletpoints}</li>
            <li>{bulletpoints}</li>
          </ul>
        </div>
    </section>
  );
}
