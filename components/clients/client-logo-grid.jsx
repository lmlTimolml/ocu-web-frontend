import ClientLogo from "./client-logo";

export default function ClientLogoList({ info }) {
  return (

    <ul className="grid gap-x-4 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[960px] mx-auto" style={{ backgroundColor: `${background[bgcolor]}`}}>
        
        {info.map((logo) => (
            
        <ClientLogo
        key={logo.id}
        alt={logo.alt}
        image={logo.image}/>
        ))}
    </ul>
    
  );
  
}