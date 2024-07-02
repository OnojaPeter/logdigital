

const FeatureSection = ({ sectionName, title, description, buttonText, imageSrc, extraText }) => {
    return (
        <>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex justify-center">
                <span className="uppercase font-medium px-3 py-1 border border-gray-800 rounded-full">{sectionName}</span>
            </div>

            <div className=" flex flex-col gap-y-6 md:flex-row md:gap-2 lg:gap-10 mt-6 md:mt-14">
                <div className=" md:w-[50%]">
                    <h2 className="text-4xl font-bold mb-3 md:mb-8 capitalize">{title}</h2>
                    <p className="text-lg mb-3 md:mb-8 text-gray-700">{description}</p>

                    {extraText && extraText.map((text, index) => (
                        <span className="flex items-center gap-2 my-2 md:my-4">
                            <img className="h-10 w-10" src="/images/service-logo.png" alt="" />
                            <p key={index} className="text-lg text-gray-700 capitalize">{text}</p>
                        </span>
                    ))}

                    {buttonText && <button className="bg-purple-700 text-white px-6 py-3 rounded">
                        {buttonText}
                    </button>}
                </div>
                <div className="flex justify-center md:w-[50%] relative">
                    <img  src={imageSrc} alt="" />
                    <p className="absolute text-white top-[45%]">picture here</p>
                    {/*  className="object-contain w-full h-full" */}
                </div>
            </div>
        </div>
        </>
    );
};

export default FeatureSection;
