import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const images = [
        "/images/hero-pic.avif",
        "/images/media-marketing.jpg",
        "/images/marketing-branding.jpg",
        "/images/marketing_2.jpg",
        "/images/socials-transp.png"
      ];

    const imageAnimation = useScrollAnimation();
    const h1Animation = useScrollAnimation();
    const text1Animation = useScrollAnimation();
    const text2Animation = useScrollAnimation();
    // const buttonAnimation = useScrollAnimation();

    const h1Variants = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeInOut' } },
    };
    const text1Variants = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeInOut', delay: '0.2' } },
    };
    const text2Variants = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeInOut', delay: '0.4' } },
    };
    const buttonVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeInOut', delay: '0.5' } },
      };

    return (
        <section className="py-5 md:py-20">
            <div className="max-w-[1400px] mx-auto  md:px-8 lg:px-16 text-start flex flex-col md:flex-row gap-5 lg:gap-10">
                <div className="md:w-[50%] flex flex-col justify-around gap-2 px-4 md:px-0">
                    <motion.h1 
                    ref={h1Animation.ref}
                    initial="hidden"
                    animate={h1Animation.controls}
                    variants={h1Variants}
                    className="hero-text font-bold">Boost Your Online Presence with Digital Marketing Services</motion.h1>

                    <div className="flex flex-col gap-4 pr-[10%] sm:pr-[0%] lg:pr-[25%] text-gray-700 text-gray-500 ">
                        <motion.p 
                        ref={text1Animation.ref}
                        animate={text1Animation.controls} 
                        initial="hidden" 
                        variants={text1Variants} 
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit facere sapiente, earum nihil.</motion.p>
                        <motion.p 
                        ref={text2Animation.ref}
                        animate={text2Animation.controls} 
                        initial="hidden" 
                        variants={text2Variants} 
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit facere sapiente, earum nihil.</motion.p>
                    </div>

                    <div className="flex ">
                        <motion.button
                        ref={text2Animation.ref}
                        variants={buttonVariants}
                        whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.9 }}
                        initial="hidden" 
                        animate={text2Animation.controls}
                        className="bg-gray-800 hover:bg-gray-100 hover:text-gray-900 border-2 border-gray-800 text-gray-100 px-4 py-3 rounded-md shadow-2xl font-medium">Get started</motion.button>
                    </div>
                </div>

                <motion.div
                ref={imageAnimation.ref}
                initial="hidden"
                animate={imageAnimation.controls}
                variants={imageAnimation.imageVariants}
                className="md:w-[50%] w-full  md:rounded-2xl overflow-hidden shadow-2xl h-[250px] md:h-[400px]">
                    {/* <img className="w-full h-[250px] md:h-[400px]  object-cover " src="/images/hero-pic.avif" alt="" /> */}
                    <Slider {...settings}>
                        {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index}`} className="w-full h-[250px] md:h-[400px]  object-cover " />
                        </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
