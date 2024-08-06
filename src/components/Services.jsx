import { delay, motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

import {services, servicesDetail} from "../Data";
import { Link } from 'react-router-dom';
  
  const Services = () => {
    // const { ref, controls, variants,textVariants } = useScrollAnimation();
    const sectionAnimation = useScrollAnimation();
    // const servicesAnimation = useScrollAnimation();
    const textAnimation = useScrollAnimation();

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
          ease: 'easeInOut'
        }
      }),
    };
// console.log(controls);
    return (
      <section className="py-8 md:pt-8">
        <div className="max-w-[1400px] mx-auto ">       
          <motion.div 
          ref={sectionAnimation.ref} 
          initial="hidden" 
          animate={sectionAnimation.controls} 
          variants={sectionAnimation.variants} 
           className="flex flex-col items-center md:text-center px-4 md:px-8 lg:px-16">
            <span className="uppercase font-bold px-3 py-1 border-2 border-gray-800 rounded-full ">our services</span>
            <h2 className="text-3xl md:text-4xl text-[#4682b4] font-bold my-5 capitalize">elevate your digital presence today</h2>
            <p className="text-lg md:text-center md:text-xl  md:mx-10 lg:mx-10 md:font-medium text-gray-700">
              In the bustling landscape of digital innovation, LogDigital emerges as a pioneering force, seamlessly integrating technology, marketing prowess, and business development expertise. Founded on the principles of innovation and client-centric solutions, LogDigital has carved a niche for itself at the intersection of cutting edge technology and strategic business growth
            </p>
          </motion.div>

          <div 
          
           className="flex justify-center relative mx-2 py-4">
            <div 
            className=" flex flex-wrap flex-grow justify-around gap-4 md:gap-6 lg:gap-2 xl:gap-0 md:py-12 ">
              {servicesDetail.map((service, index) => {
                const servicesAnimation = useScrollAnimation();
                return (
                <motion.div
                ref={servicesAnimation.ref} 
                custom={index}
                initial="hidden" 
                animate={servicesAnimation.controls} 
                variants={variants} 
                key={index}
                whileHover={{ scale: 0.95}}
                className="card rounded-lg w-full sm:w-[48%] lg:w-[24%] relative shadow-lg">
                  <p className="cardHeading">{service.name}</p>
                  <p className="cardDescription">{service.shortDescription}</p>
                  <button className="learnMoreButton rounded-lg"><Link to={service.path}>Learn more</Link></button>
                </motion.div>)}

              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Services;