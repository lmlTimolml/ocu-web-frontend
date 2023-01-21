import ServiceListMain from "../services/service-list-main";
import { getAllServices } from "../../dummy-data";

const service = getAllServices();

export default function ServiceNav( { children } ) {
    return (
  <>
  {children}
    <ServiceListMain items={service} />
  </>
    );
}
