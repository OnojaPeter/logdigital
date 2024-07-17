import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Navlink from './Navlink';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const services = [
  "Service 1", "Service 2", "Service 3", "Service 4", "Service 5",
  "Service 6", "Service 7", "Service 8", "Service 9", "Service 10",
  "Service 11", "Service 12", "Service 13", "Service 14", "Service 15",
  "Service 16", "Service 17", "Service 18"
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">LOGDIGITAL</Link>
        
        <ul className="md:flex space-x-3 lg:space-x-6 text-white hidden font-semibold">
          {/* <Navlink /> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            
            <div 
              className="relative" 
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a href="#" >Services</a>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-[500px] lg:w-[900px] bg-white rounded-md shadow-lg py-6 z-20 transition-opacity duration-300 ease-in-out ${
                  isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-wrap">
                  {services.map((service, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="w-1/3 px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-900 text-center"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className='hidden md:block'>
          <Button>
            <Link to="/contact">Get started</Link>
          </Button>
        </div>

        <div className='md:hidden block cursor-pointer'>
          <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} >
            <FaBarsStaggered className='text-white text-2xl' />
          </button>
        </div>
        
      </div>

      <div
        className={`fixed inset-y-0 right-0 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-white shadow-lg md:hidden w-3/4 max-w-sm z-50`}
      >
        <div className="flex flex-col h-full">
          <button
            className="self-end p-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex-grow p-4">
            <Link onClick={() => setIsMobileMenuOpen(false)}  to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              About
            </Link>

            <div className="relative">
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Services
              </a>
              <div
                className={`transition-opacity duration-300 ease-in-out ${
                  isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {isServicesDropdownOpen && (
                  <div className="mt-2 bg-white rounded-md shadow-lg py-2 z-20">
                    <div className="flex flex-wrap">
                      {services.map((service, index) => (
                        <a 
                          key={index} 
                          href="#" 
                          className="w-1/2 px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
      
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// className="w-1/3 px-4 py-2 text-gray-600 hover:text-white hover:bg-gray-900 text-center"