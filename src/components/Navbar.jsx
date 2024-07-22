import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { servicesDetail } from '../Data';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('radio-1');
  const gliderRef = useRef(null);

  const linkVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.3,
            ease: 'easeInOut'
        }
    })
};

  const updateGliderPosition = () => {
    const activeLabel = document.querySelector(`label[htmlFor=${selectedTab}]`);
    if (activeLabel && gliderRef.current) {
      gliderRef.current.style.width = `${activeLabel.offsetWidth}px`;
      gliderRef.current.style.left = `${activeLabel.offsetLeft}px`;
    }
  };
  useEffect(() => {
    updateGliderPosition();
    window.addEventListener('resize', updateGliderPosition);
    return () => window.removeEventListener('resize', updateGliderPosition);
  }, [selectedTab]);

  return (
    <nav className="bg-blue-200 py-4 ">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        
        <Link to="/" className="text-blue-900 text-2xl font-bold z-50 relative">LOGDIGITAL</Link>
        
        <ul className="md:flex space-x-3 lg:space-x-6 text-blue-900 hidden font-bold text-lg">
          {/* <Navlink /> */}
          <div className="container-class">
            <div className="tabs">
              <input
                type="radio"
                id="radio-1"
                name="tabs"
                checked={selectedTab === 'radio-1'}
                onChange={() => setSelectedTab('radio-1')}
              />
              <label className="tab" htmlFor="radio-1">
                <Link to="/" onClick={() => setSelectedTab('radio-1')}>Home</Link>
                {/* <span className="notification">2</span> */}
              </label>

              <input
                type="radio"
                id="radio-2"
                name="tabs"
                checked={selectedTab === 'radio-2'}
                onChange={() => setSelectedTab('radio-2')}
              />
              <label className="tab" htmlFor="radio-2">
                <Link to="/about" onClick={() => setSelectedTab('radio-2')}>About</Link>
              </label>

              <input
                type="radio"
                id="radio-3"
                name="tabs"
                checked={selectedTab === 'radio-3'}
                onChange={() => setSelectedTab('radio-3')}
              />
              <label className="tab" htmlFor="radio-3">
                <div 
                  className="relative z-[999]" 
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className='flex items-center'>
                  <span>Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
                  </div>
                  
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] lg:w-[300px] bg-white rounded-md shadow-lg py-3 z-50 transition-opacity duration-300 ease-in-out ${
                      isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className=" flex flex-col">
                      {servicesDetail.map((service) => (
                        <Link 
                          key={service.id} 
                          to={service.path}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          
                          className="rounded-md mx-4 py-2 text-gray-800 hover:text-white hover:bg-blue-400 text-center"
                        >
                          <p onClick={() => setSelectedTab('radio-3')}>{service.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                id="radio-4"
                name="tabs"
                checked={selectedTab === 'radio-4'}
                onChange={() => setSelectedTab('radio-4')}
              />
              <label className="tab" htmlFor="radio-4">
                <Link to="/contact" onClick={() => setSelectedTab('radio-4')}>Contact Us</Link>
              </label>
              
              <span className="glider"></span>
            </div>
          </div>
          
        </ul>

        <div className='hidden md:block'>           
            <button className="btn-18">
                <span className="text-container">
                    <span ><Link className="text" to="/contact">Get started</Link></span>
                </span>
            </button>
        </div>

        <div className='md:hidden block cursor-pointer'>
          <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} >
            <FaBarsStaggered className='text-blue-900 text-3xl' />
          </button>
        </div>
        
      </div>

      <div
        className={`fixed inset-y-0 right-0 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-white shadow-lg md:hidden w-full z-50`}
      >
        {/* gradient */}
        <div className='w-full h-full bg-white left-0 absolute top-0  bg-gradient-to-t from-white via-gray-200 to-blue-200'></div>

        <div className="flex flex-col h-full relative z-50">
          <button
            className="self-end p-4 text-blue-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 22 22" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className=" p-4 text-center flex items-center justify-center h-full">
            <div className='flex flex-col mt-32 space-y-6 h-[100vh] w-full overflow-auto overscroll-contain '>
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                                    variants={linkVariants}
                                >
                                  

                                  {item==="Services" ?
                                    <div className="relative">
                                      <a 
                                        href="#" 
                                        className="relative text-5xl font-bold block px-4 py-1 text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                      >
                                        <span >Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp className='absolute top-2  sm:right-40 arrow' /> : <MdKeyboardArrowDown className='absolute top-2  sm:right-40 arrow' /> }
                                      </a> 
                                      <div
                                        className={`relative inset-x-0 transition-opacity duration-300 ease-in-out ${
                                          isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                      >
                                        {isServicesDropdownOpen && (
                                          <div className="mt-2 bg-blue-100 rounded-md shadow-lg py-2 z-20">
                                            <div className="flex flex-col">
                                              {servicesDetail.map((service) => (
                                                <Link 
                                                  key={service.id} 
                                                  to={service.path}
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                  className="px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-900 text-center text-2xl font-medium "
                                                >
                                                  {service.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  : 
                                    <Link
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        to={item==="Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-5xl font-bold block px-4 text-gray-700 hover:bg-gray-100"
                                    >
                                        {item}
                                    </Link>
                                  }
                                    
                                </motion.div>
                            ))}
              {/* <Link onClick={() => setIsMobileMenuOpen(false)}  to="/" className="text-5xl font-bold block px-4 text-gray-700 hover:bg-gray-100">
                Home
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="text-5xl font-bold block px-4 text-gray-700 hover:bg-gray-100">
                About
              </Link>

              <div className="relative">
                <a 
                  href="#" 
                  className="relative text-5xl font-bold block px-4 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                >
                  <span >Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp className='absolute top-2  sm:right-40 arrow' /> : <MdKeyboardArrowDown className='absolute top-2  sm:right-40 arrow' /> }
                </a> 
                <div
                  className={`relative inset-x-0 transition-opacity duration-300 ease-in-out ${
                    isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {isServicesDropdownOpen && (
                    <div className="mt-2 bg-blue-100 rounded-md shadow-lg py-2 z-20">
                      <div className="flex flex-col">
                        {servicesDetail.map((service) => (
                          <Link 
                            key={service.id} 
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-900 text-center text-2xl font-medium "
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
        
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="text-5xl font-bold block px-4  text-gray-700 hover:bg-gray-100 ">
                Contact us
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// Fomer desktop nav 
{/* <ul>
<li className='hover:text-white hover:border-b-2 border-blue-900'><Link to="/">Home</Link></li>
<li className='hover:text-white hover:border-b-2 border-blue-900'><Link to="/about">About</Link></li>

<div 
  className="relative z-[999]" 
  onMouseEnter={() => setIsServicesDropdownOpen(true)}
  onMouseLeave={() => setIsServicesDropdownOpen(false)}
>
  <a href="#" className="relative z-10 hover:text-white hover:border-b-2 border-blue-900">Services</a>
  <div
    className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] lg:w-[300px] bg-white rounded-md shadow-lg py-3 z-20 transition-opacity duration-300 ease-in-out ${
      isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className=" flex flex-col">
      {servicesDetail.map((service) => (
        <Link 
          key={service.id} 
          to={service.path}
          onClick={() => setIsServicesDropdownOpen(false)}
          className="rounded-md mx-4 py-2 text-gray-800 hover:text-white hover:bg-blue-400 text-center"
        >
          {service.name}
        </Link>
      ))}
    </div>
  </div>
</div>
<li className='hover:text-white hover:border-b-2 border-blue-900'><Link to="/career">Career</Link></li>
<li className='hover:text-white hover:border-b-2 border-blue-900'><Link to="/contact">Contact Us</Link></li>
</ul> */}