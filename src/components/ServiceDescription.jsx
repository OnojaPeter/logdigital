import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const ServiceDescription = ({service, fSubService}) => {
    const [isSubService, setIsSubService] = useState(service.services[0])
    const [isClicked, setIsClicked] = useState(0)

    useEffect(() => {
        setIsSubService(service.services[0]);
        setIsClicked(0);
    }, [service]);

    const ServiceToDisplay = service.services.find((s)=> s.service === isSubService?.service)
    // console.log('ServiceToDisplay:', ServiceToDisplay)
    // console.log('firstSubService:', fSubService)


    const handleClick = (id) => {
        setIsSubService(service.services[id])
        setIsClicked(id)
    }

    const textVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
    };
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1},
        exit: { opacity: 0, scale: -0.9 },
    };


    return (
            <section className="text-gray-600 my-5 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
                <div>
                    <div className="">
                        <div className="flex flex-wrap flex-col md:flex-row justify-center  border-b border-gray-300 mx-4">
                            {service.services.map((s, index)=> 
                                <button 
                                    onClick={()=> handleClick(index)} 
                                    className={`font-medium text-gray-700 py-4 px-6 border-b-2 hover:border-[#4682b4] ${isClicked === index && 'border-[#4682b4]'}` }
                                    key={index}>
                                        {s.service}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="relative overflow-hidden w-full">
                        <AnimatePresence mode= 'wait'>
                            <motion.div
                            key={isClicked}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={textVariants}
                            transition={{ duration: 0.6}}
                            className="w-full"
                            >
                            <div className="my-10 flex flex-col gap-y-3 md:flex-row text-justify">
                                <div className="md:px-4 w-full md:w-[50%]">
                                
                                    <p>{ServiceToDisplay?.description}</p>
                                
                                {ServiceToDisplay?.subService &&
                                    <div className="mt-4">
                                        {ServiceToDisplay?.subService.map((s, index) => (
                                            <li key={index}>{s.name}</li>
                                        ))}
                                    </div>
                                }
                                </div>
                                <div className="md:px-4 w-full md:w-[50%]">
                                <motion.img
                                    className="object-cover w-full h-[300px]"
                                    src={`/images/${ServiceToDisplay?.image}`}
                                    alt=""
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={imageVariants}
                                    transition={{ duration: 0.6 }}
                                />
                                </div>
                            </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
    );
};

export default ServiceDescription;