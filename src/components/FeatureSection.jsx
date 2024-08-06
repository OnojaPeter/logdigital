import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { LuArrowBigRightDash } from "react-icons/lu";

const FeatureSection = ({ sectionName, title, description, moreDescription, buttonText, imageSrc, extraText, link }) => {
    const titleAnimation = useScrollAnimation();
    const descriptionAnimation = useScrollAnimation();
    const moreDescriptionAnimation = useScrollAnimation();
    const extraTextAnimation = useScrollAnimation();
    const buttonAnimation = useScrollAnimation();
    const imageAnimation = useScrollAnimation();

    return (
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-center">
                <span className={`uppercase font-bold px-3 py-1 border-2 ${sectionName === "about us" && 'border-gray-800'} rounded-full`}>{sectionName}</span>
            </div>

            <div className="flex flex-col gap-y-6 md:flex-row md:gap-2 lg:gap-10 mt-6 md:mt-0 items-center">
                <div className="md:w-[50%]">
                    <motion.h2
                        ref={titleAnimation.ref}
                        initial="hidden"
                        animate={titleAnimation.controls}
                        variants={titleAnimation.textVariants}
                        className={`text-3xl md:text-4xl font-bold mb-3 md:mb-8 capitalize ${sectionName === "about us" && "text-blue-500"}`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        ref={descriptionAnimation.ref}
                        initial="hidden"
                        animate={descriptionAnimation.controls}
                        variants={descriptionAnimation.variants}
                        className=" md:font-medium text-lg md:text-xl mb-3 md:mb-8"
                    >
                        {description}
                    </motion.p>

                    <motion.p
                        ref={moreDescriptionAnimation.ref}
                        initial="hidden"
                        animate={moreDescriptionAnimation.controls}
                        variants={moreDescriptionAnimation.textVariants}
                        className="text-lg md:text-xl md:font-medium mb-3 md:mb-8"
                    >
                        {moreDescription}
                    </motion.p>

                    {extraText && (
                        <div ref={extraTextAnimation.ref} className="space-y-4">
                            {extraText.map((text, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    animate={extraTextAnimation.controls}
                                    variants={extraTextAnimation.variants}
                                    className="flex  gap-2 my-2 md:my-4"
                                >
                                    {/* <img className="h-10 w-10" src="/images/service-logo.png" alt="" /> */}
                                    <div><LuArrowBigRightDash className='pt-2 w-6 h-6 md:w-8 md:h-8' /></div>
                                    <p className="text-[0.9rem] md:text-lg text-white capitalize">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {buttonText && 
                        <motion.button
                            ref={buttonAnimation.ref}
                            variants={buttonAnimation.buttonVariants}
                            whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.9 }}
                            initial="hidden"
                            animate={buttonAnimation.controls}
                            className=" text-white font-medium px-6 py-3 bg-blue-500 rounded-md"
                        >
                            <Link to={link}>{buttonText}</Link>
                        </motion.button>
                    }
                </div>
                {imageSrc && 
                    <div className="flex justify-center md:w-[50%] relative">
                        <motion.img
                            src={imageSrc}
                            alt="storyset.com/"
                            ref={imageAnimation.ref}
                            initial="hidden"
                            animate={imageAnimation.controls}
                            variants={imageAnimation.imageVariants}
                            className="rounded-lg w-[70%] h-[70%] object-cover w-full "
                        /> {/*h-[250px] md:h-[400px]*/}
                    </div>
                }
            </div>
        </div>
    );
};

export default FeatureSection;


