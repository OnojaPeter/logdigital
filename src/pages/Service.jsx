import { useParams, Link } from "react-router-dom";
import { servicesDetail } from "../Data";

import ServiceTitle from "../components/ServiceTitle"
import ServiceHero from "../components/ServiceHero"
import ServiceDescription from "../components/ServiceDescription"


function Service() {
  const { id } = useParams();
  const service = servicesDetail.find((s) => s.path === `/services/${id}`);
  const firstSubService = service.services[0]
  // console.log('firstSubService:', firstSubService)

  if (!service) {
    return <div>Service not found</div>;
  }

    return (
      <>
        <ServiceTitle service={service} fSubService={firstSubService} />
        <ServiceHero service={service} fSubService={firstSubService} />
        <ServiceDescription service={service} fSubService={firstSubService} />
      </>
    )
  }
  
  export default Service