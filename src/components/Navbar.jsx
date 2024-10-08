import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { servicesDetail } from '../Data';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const menuLinks = [
  { route: '/', name: 'Home' },
  { route: '/about', name: 'About' },
  { route: '/services', name: 'Services' },
  { route: '/contact', name: 'Contact' },
  // { route: '/', name: 'Logout' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('radio-1');
  const gliderRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // console.log('inside block')
      setIsServicesDropdownOpen(false)

      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return (()=> {
      document.body.style.overflow = ''
    })
  }, [isMobileMenuOpen])

  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsFixed(true); // Fix the navbar
      setIsVisible(true); // Show navbar
    } else if (window.scrollY > 300) {
      setIsVisible(false); // Hide navbar
    }
    else if (window.scrollY > 500) {
      setIsFixed(true); // Unfix the navbar
      // setIsVisible(false); // Hide navbar
    } else {
      setIsFixed(false); // Unfix the navbar
      setIsVisible(true); // Show navbar
    }
  }
  // const linkVariants = {
  //   hidden: { opacity: 0, x: 80 },
  //   visible: (i) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       delay: i * 0.2,
  //       duration: 0.3,
  //       ease: 'easeInOut'
  //     }
  //   })
  // };

  const menuVariants = {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.112, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.4,
        ease: [0.112, 0, 0.39, 1]
      }
    }
  }

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        staggerDirection: 1
      }
    },
  }

  const linkVariants2 = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1]
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  const updateGliderPosition = () => {
    const activeLabel = document.querySelector(`label[htmlFor=${selectedTab}]`);
    if (activeLabel && gliderRef.current) {
      gliderRef.current.style.width = `${activeLabel.offsetWidth}px`;
      gliderRef.current.style.left = `${activeLabel.offsetLeft}px`;
    }
  };
  useEffect(() => {
    updateGliderPosition();
    toggleVisibility();
    window.addEventListener('resize', updateGliderPosition);
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('resize', updateGliderPosition);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [selectedTab]);

  return (
    <nav className={`${isFixed ? 'sticky  transition-all duration-500 ease-in-out' : 'relative '} ${isVisible ? 'md:translate-y-0' : 'md:-translate-y-full'}  bg-white py-1 md:py-3  top-0 left-0 right-0 z-50 `}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-4  flex justify-between items-center">

        <Link to="/" className="text-white text-2xl font-bold z-50 relative overflow-hidden">
          <img className='h-14 hidden lg:block' src="/images/main-logo.png" alt="" />
          <img className='h-14 hidden md:block lg:hidden' src="/images/logo-icon.png" alt="" />
          <img className='h-12 block md:hidden' src="/images/logo-icon.png" alt="" />
        </Link>

        <ul className="md:flex space-x-3 lg:space-x-6 text-blue-900 hidden font-bold text-lg">
          {/* <Navlink -- 'translate-y-0' : '-translate-y-full' /> */}
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
                    <span>Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </div>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] lg:w-[300px] bg-white rounded-md shadow-lg py-3 z-50 transition-opacity duration-300 ease-in-out ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                  >
                    <div className=" flex flex-col">
                      {servicesDetail.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          onClick={() => setIsServicesDropdownOpen(false)}

                          className="rounded-md mx-4 py-2 text-gray-800 hover:text-white hover:bg-[#4682b4] text-center"
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
          <motion.button
            initial={false}
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            className='py-3 w-14 flex justify-center' onClick={() => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen)} >
            <FaBarsStaggered className='text-[#4682b4] text-3xl' />
          </motion.button>
        </div>
      </div>

      {/* <div
        className={`fixed inset-y-0 right-0 transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } bg-white shadow-lg md:hidden w-full z-50 `}
      >
        
        <div className='w-full h-full bg-white left-0 absolute top-0  bg-gradient-to-t from-white via-[#61829c] to-[#4682b4]'></div>

        <div className="flex flex-col h-full relative z-50">
          <button
            className="self-end p-4 text-white"
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


                  {item === "Services" ?
                    <div className="relative">
                      <a
                        href="#"
                        className="relative text-5xl font-bold block px-4 py-1 text-white hover:text-[#4682b4] hover:bg-gray-100"
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      >
                        <span >Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp className='absolute top-2  sm:right-40 arrow' /> : <MdKeyboardArrowDown className='absolute top-2  sm:right-40 arrow' />}
                      </a>
                      <div
                        className={`relative inset-x-0 transition-opacity duration-300 ease-in-out ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                          }`}
                      >
                        {isServicesDropdownOpen && (
                          <div className="mt-2 bg-[#4682b4] rounded-md shadow-lg py-2 z-20">
                            <div className="flex flex-col">
                              {servicesDetail.map((service) => (
                                <Link
                                  key={service.id}
                                  to={service.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="mx-4 py-2 text-white hover:bg-gray-700 text-center text-2xl font-medium rounded"
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
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-5xl font-bold block px-4 text-white hover:text-[#4682b4] hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  }

                </motion.div>
              ))}
              
            </div>
          </nav>
        </div>
      </div> */}

      <AnimatePresence >
        {isMobileMenuOpen &&
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 right-0 bg-white text-black h-full origin-top md:hidden">
            <div className="flex w-full justify-center h-full">
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate='open'
                exit="initial"
                className="flex flex-col gap-4 items-center justify-center h-full mobile-nav text-4xl w-full">
                {menuLinks.map((menu, index) => (

                  <div key={index} className="overflow-hidden py-2">

                    {menu.name === "Services" ?
                      <motion.div variants={linkVariants2} className="relative">
                        <a
                          href="#"
                          className="relative text-4xl  block px-10 py-1  "
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                          <div className='flex justify-center  w-full'>
                            <h2>Services</h2>
                            <div className='top-2 absolute right-0'>{isServicesDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
                          </div>
                          {/* <span >Services </span>{isServicesDropdownOpen ? <MdKeyboardArrowUp className='absolute top-2  sm:right-40 arrow' /> : <MdKeyboardArrowDown className='absolute top-2  sm:right-40 arrow' />} */}
                        </a>
                        <div
                          className={`relative inset-x-0 transition-opacity duration-300 ease-in-out ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        >
                          {isServicesDropdownOpen && (
                            <div className="mt-2 bg-[#4682b4] rounded-md shadow-lg py-2 z-20">
                              <div className="flex flex-col">
                                {servicesDetail.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={service.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mx-4 py-2 text-white hover:bg-gray-700 text-center text-2xl font-medium rounded"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                      :
                      <motion.div
                        variants={linkVariants2}
                      >
                        <Link onClick={() => setIsMobileMenuOpen(false)} to={menu.route}>{menu.name}</Link>
                      </motion.div>
                    }
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;