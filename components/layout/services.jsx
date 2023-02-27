
export default function Services({ service }) {

  const { Feed } = service.data.attributes;

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  return (
    <article>
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </article>
  );
}
