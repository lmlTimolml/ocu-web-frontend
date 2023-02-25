
export default function Services({ service }) {

  const { Feed } = service.data.attributes;

  console.log("Page: servicefeed", Feed);

  const components = Feed?.map((component) => {
    const ComponentType =
      require(`../../components/modules/${component.__typename}`).default;
    return <ComponentType key={component.id} {...component} />;
  });

  return (
    <>
      {components?.map((components, i) => {
        return <section key={i}>{components}</section>;
      })}
    </>
  );
}
