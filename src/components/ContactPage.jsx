import { MdSend } from 'react-icons/md';
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            company: '',
            message: ''
        })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formData)
        try {
            const response = await axios.post('https://log-backend.vercel.app/contact', { 
                name: formData.name, 
                email: formData.email, 
                company: formData.company, 
                message: formData.message
            });
            console.log('response:', response)
            // timeout removed because the email for the backend takes about 4seconds to process
            // await new Promise((resolve) => setTimeout(resolve, 2000));

            if (response.status === 200) {
                toast.success('Form submitted successfully!');
            } else {
                toast.error('Form submission failed!');
            }

            setFormData({name: '', email: '', company: '', message: ''})
        } catch (error) {
            // console.log('error:', error)
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            
        }
    }

    return (
        <section className=" py-7 md:py-12 h-full">
            <div className="max-w-[1400px] mx-auto text-center px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4682b4] capitalize">want to get in touch?</h2>

                <div className='flex flex-col-reverse md:flex-row justify-between gap-y-8 gap-x-12 lg:gap-x-20 mt-6 md:mt-12 border border-[#4682b4] bg-[#90bce0] shadow-xl p-6 md:p-10 lg:p-16 rounded-lg'>
                    <div className='text-start font-medium text-gray-800'>
                        <h2 className='capitalize font-bold text-xl mb-8 text-white'>lets join forces to create unique experiences</h2>

                        <ul className="flex flex-col gap-3 mt-8 text-white">
                            <li className="flex gap-2"><MdPhoneInTalk className="text-2xl text-[#4682b4]" /> <p>+2348034073641</p></li>
                            <li className="flex gap-2"><MdEmail className="text-2xl text-[#4682b4]" /> <p>info@logdigitalltd.com</p></li>
                            <li className="flex gap-2"><FaLocationDot className="text-2xl text-[#4682b4]" /> <p>Abuja, Nigeria</p></li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className=" space-y-3">

                            <input value={formData.name} onChange={handleChange} name='name' id='name' className=" w-full px-4 py-2 border border-[#4682b4] focus:border-2 focus:outline-none focus:ring-0 rounded-lg capitalize" type="text" placeholder="Full Name*"  required/>
                            <input value={formData.email} onChange={handleChange} name='email' id='email' className=" w-full px-4 py-2 border border-[#4682b4] focus:border-2 focus:outline-none focus:ring-0 rounded-lg" type="email" placeholder="Email Address*"  required/>
                            <input value={formData.company} onChange={handleChange} name='company' id='company' className=" w-full px-4 py-2 border border-[#4682b4] focus:border-2 focus:outline-none focus:ring-0 rounded-lg" type="text" placeholder="Company Name" />

                            <textarea value={formData.message} onChange={handleChange} name='message' id='message' className="w-full px-4 py-2 border border-[#4682b4] focus:border-2 focus:outline-none focus:ring-0 rounded-lg" rows="5" placeholder="How can we help you? *" required></textarea>
                            
                            <button type="submit" disabled={loading} style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.3)'}} className="bg-[#4682b4] transform transition ease-in-out duration-300  hover:scale-110 text-white px-3 md:px-8 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-1">
                                {loading ? <div className="spinner"></div>
                                    : 
                                    <div className='flex items-center justify-center gap-1'>
                                        <p>Send</p>
                                        <MdSend className="w-5 h-5" />
                                    </div>
                                }
                                
                            </button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ContactPage;