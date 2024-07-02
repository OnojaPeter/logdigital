import services from "../Data";
  
  const Services = () => {
    return (
      <section className="bg-blue-100 pt-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">       
          <div className="flex flex-col items-center md:text-center">
            <span className="uppercase font-medium px-3 py-1 border border-gray-800 rounded-full ">our services</span>
            <h2 className="text-4xl font-bold my-5 capitalize">elevate your digital presence today</h2>
            <p className="text-lg mb-8 md:mx-24 lg:mx-40 ">Lorem ipsum, dolor sit amet dolorem eligendi iusto harum beatae consectetur adipisicing elit. Sit odit, voluptas deleniti dolorem eligendi iusto harum beatae !</p>
          </div>

          <div className="bg-white rounded-t-[30px] relative">
            <div className="hidden absolute inset-0 md:flex flex-wrap justify-center m-10">
              <div className="w-full h-[1px] bg-gray-300 absolute top-1/2 transform -translate-y-1/2"></div>
              <div className="w-[1px] h-full bg-gray-300 absolute left-1/3"></div>
              <div className="w-[1px] h-full bg-gray-300 absolute left-2/3"></div>
            </div>
            <div className="flex flex-wrap justify-center py-12">
              {services.map((service, index) => (
                <div key={index} className="w-1/2 md:w-1/3 p-2">
                  <div className="p-6 flex gap-2">
                    <div className="sm:block hidden" >
                      <img src="/images/service-logo.png" alt="" />
                    </div>
                    <div className="text-start">
                      <h3 className="text-xl font-bold lg:mb-2">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Services;