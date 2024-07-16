import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FeatureSection = ({ sectionName, title, description, moreDescription, buttonText, imageSrc, extraText }) => {
    // const { ref, controls, variants, textVariants, imageVariants } = useScrollAnimation();
    const imageAnimation = useScrollAnimation();
    const descriptionAnimation = useScrollAnimation();
    const textAnimation = useScrollAnimation();
    const moreTextAnimation = useScrollAnimation();

    return (
        // <motion.div
        //     ref={ref}
        //     initial="hidden"
        //     animate={controls}
        //     variants={variants}

        // >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex justify-center">
                    <span className="uppercase font-medium px-3 py-1 border  rounded-full">{sectionName}</span> {/* border-gray-800 */}
                </div>

                <div className=" flex flex-col gap-y-6 md:flex-row md:gap-2 lg:gap-10 mt-6 md:mt-14">
                    <div className=" md:w-[50%]">
                        <motion.h2 
                            ref={descriptionAnimation.ref} 
                            initial="hidden" 
                            animate={descriptionAnimation.controls} 
                            variants={descriptionAnimation.textVariants} 
                            className="text-4xl font-bold mb-3 md:mb-8 capitalize">
                                {title}
                        </motion.h2>
                        {/* <h2 className="text-4xl font-bold mb-3 md:mb-8 capitalize">{title}</h2> */}
                        <motion.p ref={textAnimation.ref} 
                            initial="hidden" 
                            animate={textAnimation.controls} 
                            variants={textAnimation.textVariants} 
                            className="text-lg mb-3 md:mb-8 "
                        >
                            {description}
                        </motion.p>

                        <motion.p ref={moreTextAnimation.ref} 
                            initial="hidden" 
                            animate={moreTextAnimation.controls} 
                            variants={moreTextAnimation.textVariants} 
                            className="text-lg mb-3 md:mb-8 "
                        >
                            {moreDescription}
                        </motion.p>

                        {extraText && extraText.map((text, index) => (
                            <motion.span
                            ref={textAnimation.ref} 
                            initial="hidden" 
                            animate={textAnimation.controls} 
                            variants={textAnimation.variants} 
                             key={index} className="flex items-center gap-2 my-2 md:my-4">
                                <img className="h-10 w-10" src="/images/service-logo.png" alt="" />
                                <p className="text-xl text-white capitalize">{text}</p>
                            </motion.span>
                        ))}

                        {buttonText && 
                        <motion.button
                            ref={textAnimation.ref}
                            variants={textAnimation.buttonVariants}
                            whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.9 }}
                            initial="hidden" 
                            animate={textAnimation.controls}
                            className="bg-purple-700 text-white px-6 py-3 rounded">
                                {buttonText}
                        </motion.button>}
                    </div>
                    <div className="flex justify-center md:w-[50%] relative">
                        {/* <img src={imageSrc} alt="" /> */}
                        <motion.img
                            src={imageSrc}
                            alt=""
                            ref={imageAnimation.ref}
                            initial="hidden"
                            animate={imageAnimation.controls}
                            variants={imageAnimation.imageVariants}
                            className="rounded-lg shadow-lg object-cover h-[250px] md:h-[400px] w-full"
                        />
                        {/* <p className="absolute text-white top-[45%]">picture here</p> */}
                        {/*  className="object-contain w-full h-full" */}
                    </div>
                </div>
            </div>
        // </motion.div>
    );
};

export default FeatureSection;
