import { useParams, Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const ServiceHero = ({service}) => {
  return (
        <section className="text-gray-600">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 my-12 flex flex-col md:flex-row">
                <div className="w-full md:w-[30%] space-y-7 md:px-4">
                    <img className="h-[300px] w-[300px]" src="/images/black-pic.png" alt="img" />
                    <div className="space-y-2 capitalize lg:pr-5">
                        <h2 className="text-3xl font-medium text-[#4682b4]"> sam a. Jerry </h2>
                        <p>chairman, partner, {service.name} services</p>
                    </div>
                </div>

                <div className="w-full md:w-[70%] md:px-4 space-y-7 mt-5 md:mt-0 text-justify">
                    <p>{service.description}</p>

                    <div>
                        <p>At LogDigital we provide the following {service.name} Services:</p>
                        <div className="mt-2 ">
                            {service.services.map((s, index)=> 
                                <li className="py-1" key={index}>{s.service}</li>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;