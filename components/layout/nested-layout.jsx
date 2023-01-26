import ServiceListMain from "../services/service-list-main";
import { getAllServices } from "../../dummy-data";

const service = getAllServices();

export default function ServiceNav () {
    return (
  <>
    <ServiceListMain items={service} />
  </>
    );
}
