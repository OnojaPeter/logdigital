import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesDetail } from '../Data';

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesDetail.find(s => s.path === `/services/${id}`);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className='bg-gray-50 py-7 md:py-12'>
        <div className='max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 '>
            <div className='space-y-10 md:space-y-20 '>
                <div className='space-y-2 md:space-y-5'>
                    <h1 className='text-2xl md:text-4xl text-center font-semibold'>{service.name}</h1>
                    <p className='text-sm md:text-lg text-gray-700 font-semibold text-center'>{service.description}</p>
                </div>
                
                <div className='space-y-10'>
                    {service.services.map(( s , index ) => (
                        <div key={index} className='p-5 bg-blue-100 rounded-lg shadow-lg space-y-3'>
                            <div className='space-y-2'>
                                <h2 className='text-2xl font-semibold text-blue-600'>{s.service}</h2>
                                <h2 className='text-base text-gray-700 font-medium'>{s.description}</h2>
                            </div>

                            <div className='space-y-2 pl-5 border-l-2 border-blue-300'>
                                {s.subService && s.subService.map(( s , index) => (
                                    <div className=' flex flex-col gap-1 items-start' key={index}>
                                        <h3 className='font-medium text-lg'>{s.name}:</h3>
                                        <p className='text-gray-600'>{s.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                    {service.name === "Tech Services" && 
                        <p className='font-bold text-gray-800 text-lg'>We are committed to delivering exceptional value and tangible results to our clients. Whether you're a small startup or a large enterprise, we have the expertise and resources to support your IT needs and drive your business forward.</p>
                    }
                    {service.name === "Management service" &&
                        <p className='font-bold text-gray-800 text-lg'>At LOG DIGITAL, we understand the unique challenges and opportunities associated with managing event centers, gardens, halls, and short-term rental properties. With our expertise, professionalism, and dedication to customer satisfaction, we help property owners maximize the value of their investments while providing exceptional experiences for their clients and guests. Partner with LOG DIGITAL for expert management services that deliver results.</p>
                    }
                    {service.name === "Outsourcing (BPO)" &&
                        <p className='font-bold text-gray-800 text-lg'>At LOG DIGITAL, we leverage cutting-edge technology, industry best practices, and a global talent pool to deliver superior BPO services that drive business success. Our dedicated team is committed to delivering exceptional results, fostering long-term partnerships, and helping our clients achieve their strategic objectives.</p>
                    }
                    
                </div>
                {/* <div>
                    <Link to="/">View All Services</Link>
                </div> */}
                
            </div>
            
        </div>
    </section>
  );
}

export default ServiceDetail;
