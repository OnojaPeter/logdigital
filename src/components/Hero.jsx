import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        "/images/black-pic.png",
        // "/path/to/image3.jpg",
        // Add more images as needed
      ];

    return (
        <section className="py-5 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 text-start flex flex-col md:flex-row gap-5 lg:gap-10">
                <div className="md:w-[50%] flex flex-col justify-around gap-2">
                    <h1 className="hero-text font-bold">Boost Your Online Presence with Digital Marketing Services</h1>

                    <div className="flex flex-col gap-4 pr-[10%] sm:pr-[0%] lg:pr-[25%] text-gray-700 text-gray-500 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit facere sapiente, earum nihil.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit facere sapiente, earum nihil.</p>
                    </div>

                    <div className="flex ">
                        <button className="bg-gray-800 hover:bg-gray-100 hover:text-gray-900 border-2 border-gray-800 text-gray-100 px-4 py-3 rounded-md shadow-2xl font-medium">Get started</button>
                    </div>
                </div>

                <div className="md:w-[50%] w-full rounded-md md:rounded-2xl overflow-hidden shadow-2xl h-[250px] md:h-[400px]">
                    {/* <img className="w-full h-[250px] md:h-[400px]  object-cover " src="/images/hero-pic.avif" alt="" /> */}
                    <Slider {...settings}>
                        {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index}`} className="w-full h-[250px] md:h-[400px]  object-cover " />
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero;
