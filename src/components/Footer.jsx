import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white pt-10 sm:pt-20 pb-10">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16  ">
                    <div className="flex justify-between flex-col sm:flex-row gap-y-8  text-lg font-medium">
                        <div className="flex flex-col gap-4 sm:gap-7">
                            <div>
                                <a href="/" className=" text-2xl font-bold">LOGDIGITAL</a>
                            </div>

                            <div className="flex flex-col gap-2 ">
                                <p>Get in touch</p>
                                <p>Lets make something great together</p>
                                <p>Contact us to start a project, we'll get back to you soon</p>
                            </div>


                            <ul className="flex flex-row sm:flex-col gap-3 text-white">
                                <a href="https://x.com/LogDigitalL" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-blue-300"><BsTwitterX className="text-2xl" /><p className="hidden sm:block">X (Formally twitter)</p></a>
                                <a href="https://www.facebook.com/profile.php?id=61558437026463&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-blue-300"><FaFacebookF className="text-2xl" /><p className="hidden sm:block">Facebook</p></a>
                                <a href="https://www.instagram.com/logdigital_limited?igsh=MW9qNWoyZzU1N3p6cw==" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-blue-300"><FaInstagram className="text-2xl" /><p className="hidden sm:block">Instagram</p></a>
                                <a href="https://www.linkedin.com/company/logdigital-limited" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-blue-300"><FaLinkedinIn className="text-2xl" /><p className="hidden sm:block">LinkedIn</p></a>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="capitalize text-xl">You've got questions? <br /> we have answers!</h3>

                            <ul className="flex flex-col gap-3 text-white">
                                <li className="flex gap-2"><MdPhoneInTalk className="text-2xl" /> <p>+5526171</p></li>
                                <li className="flex gap-2"><MdEmail className="text-2xl" /> <p>info@logdigitalltd.com</p></li>
                                <li className="flex gap-2"><FaLocationDot className="text-2xl" /> <p>Abuja, Nigeria</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;