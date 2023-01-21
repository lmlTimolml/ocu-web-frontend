
 import Button from "../ui/text-button";
 
 export default function ServiceItem(props) {
    const { title, link, id } = props;
    
    const serviceLink = `/tjenester/${id}`;

    return (
      <li className="flex flex-col aspect-square justify-between bg-oculos-harmony antialiased p-3 md:p-5">
        
        
            <h2 className="font-bold text-2xl sm:text-lg md:text-2xl">{title}</h2>
          
            <Button link={serviceLink}>{link}</Button>
      </li>
    );
  }