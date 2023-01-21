

export default function HeadingTextModule(props) {

        const { title, description, id } = props;

  return (
    <article className="flex flex-col antialiased max-w-[960px] mx-auto">
      <h1 className="font-bold text-3xl mb-5">Våre tjenester</h1>
          <p className="font-medium text-lg">
          Kort setning om at vi leverer tjenester innen CRM og Loyalty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
    </article>
  )
}
