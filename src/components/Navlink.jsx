import { Link } from "react-router-dom";

function Navlink() {
    return (
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            {/* <li><Link to="/career">Career</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
        </>
    )
}

export default Navlink;