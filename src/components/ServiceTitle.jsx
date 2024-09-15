import { useParams, Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
// import { servicesDetail } from "../Data";

const ServiceTitle = ({service}) => {
  // const { id } = useParams();
  // const service = servicesDetail.find((s) => s.path === `/services/${id}`);

  // if (!service) {
  //   return <div>Service not found</div>;
  // }
  return (
    <section className="relative">
        {/* <div className="serviceTitleBg absolute h-full w-full top-0 left-0 z-20"></div>
        <img 
          style={{backgroundPosition: '0% 0%'}} 
          className="object-cover absolute inset-0 h-full w-full" 
          src="/images/service-hero2.jpg" alt="" 
        />

        <div className="overflow-hidden relative flex items-center  min-h-[218px] max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
            
            <div className="relative items-center h-full text-gray-100 space-y-8 z-20 mx-4">
                <h1 className="text-5xl">{service.name}</h1>
                <p className="flex items-center gap-2"><Link to={'/'}>Home</Link> <IoChevronForward /> {service.name}</p>
            </div>
        </div> */}
        
        <div className="relative w-full min-h-[218px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4682b4] via-transparent to-[#ff6347] opacity-100" />
            {/* <img className="relative" src="/banner1.jpg" alt="" /> */}
            <div className="absolute inset-0 bg-cover bg-center opacity-65"  >
              <img className="h-full w-full object-cover" src={`/images/${service.bannerImg}`} alt="" />
            </div>
            <div className="overflow-hidden relative flex items-center  min-h-[218px] max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
              <div className="relative items-center h-full text-gray-100 space-y-8 z-20 mx-4">
                  <h1 className="text-6xl ">{service.name}</h1>
                  <p className="flex items-center gap-2"><Link to={'/'}>Home</Link> <IoChevronForward /> {service.name}</p>
              </div>
            </div>
        </div>

    </section>
  );
};

export default ServiceTitle;
