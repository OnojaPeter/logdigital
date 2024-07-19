import { MdSend } from 'react-icons/md';
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <section className="bg-gray-50 py-7 md:py-12 h-full">
            <div className="max-w-[1400px] mx-auto text-center px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">want to get in touch?</h2>
                <p className='sm:mx-10 md:mx-20 lg:mx-32 text-sm md:text-lg mt-2'>We love hearing from people, whether they're our users or just curious about what we do. If you have any questions about our products or want to give us feedback, don't hesitate to get in touch with us</p>

                <div className='flex flex-col-reverse md:flex-row justify-between gap-y-8 gap-x-12 lg:gap-x-20 mt-6 md:mt-12 bg-blue-100 p-6 md:p-10 lg:p-16 rounded-lg'>
                    <div className='text-start font-medium'>
                        <h2 className='capitalize font-bold text-xl mb-8'>lets join forces to create unique experiences</h2>
                        <p className='uppercase'>we will transform your brand</p>
                        <p className='text-sm'>Our ears and mind are here for you reach out!</p>

                        <ul className="flex flex-col gap-3 mt-8">
                            <li className="flex gap-2"><MdPhoneInTalk className="text-2xl" /> <p>+5526171</p></li>
                            <li className="flex gap-2"><MdEmail className="text-2xl" /> <p>logdigital@gmail.com</p></li>
                            <li className="flex gap-2"><FaLocationDot className="text-2xl" /> <p>Abuja, Nigeria</p></li>
                        </ul>
                    </div>
                    <div>
                        <form className=" space-y-3">

                            <input className=" w-full px-4 py-2 border rounded-lg" type="text" placeholder="Full Name" />
                            <input className=" w-full px-4 py-2 border rounded-lg" type="email" placeholder="Email Address" />
                            <input className=" w-full px-4 py-2 border rounded-lg" type="text" placeholder="Company Name" />

                            <textarea className="w-full px-4 py-2 border rounded-lg" rows="5" placeholder="How can we help you?"></textarea>
                            
                            <button style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.3)'}} className="bg-indigo-600 transform transition ease-in-out duration-300  hover:scale-110 text-white px-3 md:px-8 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-1">
                                <p>Send</p>
                                <MdSend className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ContactPage;