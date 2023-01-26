import ClientLogo from "./client-logo";

export default function ClientLogoList({ info }) {
  return (
    <ul className="grid gap-x-4 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-transparent antialiased max-w-[960px] mx-auto">
        {info.map((image) => (
        <ClientLogo
        key={image.id}
        alt={image.alt}
        image={image.image} />
        ))}
    </ul>
  );
}
