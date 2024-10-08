import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className="bg-[#4682b4] text-white pt-10 sm:py-16 pb-10">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16  ">
                    <div className="flex justify-between flex-col sm:flex-row gap-y-6  text-lg font-medium">
                        <div className="flex flex-col gap-4">
                            <div>
                                <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
                                    
                                    <img className='h-10 md:h-14' src="/images/logo-icon.png" alt="" />
                                    LOGDIGITAL
                                </Link>
                            </div>

                            <div className="flex flex-col ">
                                <p>Get in touch</p>
                                <p>Lets make something great together</p>
                            </div>

                            <div>
                                our social media
                                <ul className="flex flex-row gap-3 text-white">
                                    <div className="bg-black hover:bg-white hover:text-black rounded-md ">
                                        <a href="https://x.com/LogDigitalL" target="_blank" rel="noopener noreferrer" className="flex gap-2 p-2"><BsTwitterX className="text-2xl" /></a>
                                    </div>

                                    <div className="bg-blue-700 hover:bg-blue-900 rounded-md ">
                                        <a href="https://www.facebook.com/profile.php?id=61558437026463&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="flex gap-2 p-2"><FaFacebookF className="text-2xl" /></a>
                                    </div>

                                    <div className="bg-pink-600 hover:bg-pink-800 rounded-md ">
                                        <a href="https://www.instagram.com/logdigital_limited?igsh=MW9qNWoyZzU1N3p6cw==" target="_blank" rel="noopener noreferrer" className="flex gap-2 p-2"><FaInstagram className="text-2xl" /></a>
                                    </div>

                                    <div className="bg-blue-700 hover:bg-blue-900  rounded-md ">
                                        <a href="https://www.linkedin.com/company/logdigital-limited" target="_blank" rel="noopener noreferrer" className="flex gap-2 p-2"><FaLinkedinIn className="text-2xl" /></a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 justify-center">
                            <h3 className="capitalize text-xl">You've got questions? <br /> we have answers!</h3>

                            <ul className="flex flex-col gap-2 text-white">
                                <li className="flex gap-2"><MdPhoneInTalk className="text-2xl" /> <p>+2348034073641</p></li>
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