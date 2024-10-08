import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const Hero = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const images = [
        "/images/slide2.png",
        "/images/slide3.png",
        "/images/slide5.png",
        "/images/slide7.png"
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
        <section className="pt-8 mb-10 md:mb-0 md:py-10   relative  ">{/* pt-5 svgBackground */}
            {/* BG gradient */}
            {/* <div className='w-full h-full bg-white left-0 absolute top-0  bg-gradient-to-t from-gray-50 via-gray-50 to-blue-200'></div> */}
            
            {/* <div className='absolute overflow-hidden hidden justify-center inset-0 top-0 z-40 '>
                <div className='relative w-[400px] h-[400px] rounded-full relative blur-[70px] circle1 bg-opacity-50  bg-blue-300'></div>
                <div className='relative w-[400px] h-[400px] rounded-full relative blur-[70px] circle2 bg-opacity-50  bg-gray-300'></div>
                <div className='relative w-[400px] h-[400px] rounded-full relative blur-[70px] circle1 bg-opacity-50  bg-purple-200'></div>
            </div> */}

            <div className="max-w-[1400px] mx-auto  md:px-8 lg:px-16 text-start flex flex-col md:flex-row md:gap-10 relative z-40">
                <div className="md:w-[50%] flex flex-col justify-around gap-2 px-4 md:px-0">
                    <motion.h1 
                    ref={h1Animation.ref}
                    initial="hidden"
                    animate={h1Animation.controls}
                    variants={h1Variants}
                    className="hero-text font-bold">Your trusted partner in <span className='text-[#4682b4]'> Technology, Marketing, & Business Management </span>Excellence.</motion.h1>

                    <div className="flex flex-col gap-4 pr-[10%] sm:pr-[0%] lg:pr-[20%] text-gray-600 text-lg md:text-xl font-medium">
                        <motion.p 
                        ref={text1Animation.ref}
                        animate={text1Animation.controls} 
                        initial="hidden" 
                        variants={text1Variants} 
                        >
                            We help you navigate the digital landscape with innovative solutions tailored to your unique needs.
                        </motion.p>
                    </div>

                    <div className="flex ">
                        <motion.div
                        ref={text2Animation.ref}
                        variants={buttonVariants}
                        whileTap={{ scale: 0.9 }}
                        initial="hidden" 
                        animate={text2Animation.controls}
                        className='hero-btn rounded-full'
                        >
                            <button className="btn-17">
                                <span className="text-container">
                                    <span ><Link className="text" to="/contact">Get started</Link></span>
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                ref={imageAnimation.ref}
                initial="hidden"
                animate={imageAnimation.controls}
                variants={imageAnimation.imageVariants}
                className="md:w-[50%] w-full  md:rounded-2xl overflow-hidden  h-[350px] md:h-[450px]">
                    <Slider {...settings}>
                        {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index}`} className="w-full h-[350px] md:h-[450px]  object-cover " />
                        </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
