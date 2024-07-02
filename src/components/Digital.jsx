import React from 'react';

const services = [
    {
      title: "Digital Marketing",
      description: "Elementum venenatis ornare. Sollicitudin mauris."
    },
    {
      title: "Social Media",
      description: "Elementum venenatis ornare. Sollicitudin mauris."
    },
    {
      title: "Creative Branding",
      description: "Elementum venenatis ornare. Sollicitudin mauris."
    }
  ];
  
  const Digital = () => {
    return (
      <section className="bg-white py-10 border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
                
                <div className=" p-6 rounded-lg shadow-lg flex gap-2">
                    <div>
                        <img className="w-16 h-16 object-contain" src="/images/service-logo.png" alt="" />
                    </div>
                    <div className='text-start'>
                        <h3 className="text-xl font-bold lg:mb-2">{service.title}</h3>
                        <p className='text-gray-700'>{service.description}</p>
                    </div>
                    
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Digital;
