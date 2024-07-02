import { Button } from './Button';
import Navlink from './Navlink';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">LOGDIGITAL</a>
        
        <ul className="md:flex space-x-4 text-white hidden">
          <Navlink />
        </ul>

        <div className='hidden md:block'>
          <Button>
            Get Started
          </Button>
        </div>

        <div className='md:hidden block cursor-pointer'>
          <FaBarsStaggered className='text-white text-2xl' />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
