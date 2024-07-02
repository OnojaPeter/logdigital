const Hero = () => {
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 text-start flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="md:w-[50%]">
                    <h1 className="hero-text font-bold">Boost Your Online Presence with Digital Marketing Services</h1>
                    <div className="flex mt-4 md:mt-8">
                        <button className="bg-gray-800 text-gray-100 px-4 py-3 rounded">Get started</button>
                    </div>
                </div>

                <div className="md:w-[50%] w-full">
                    <img className="w-full h-[350px] md:h-full object-cover" src="/images/hero-pic.avif" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
