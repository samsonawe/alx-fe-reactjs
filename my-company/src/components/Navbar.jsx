import { Link } from "react-router-dom";
import logo from "/public/smartpen.jpg";

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', backgroundColor: '#333', padding: '10px' }}>
        <Link to="/"><img src={logo} style={{ width: '50px' }} /></Link>
        <div>
            <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
            <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
            <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
        </div>
        
    </nav>
  )
}
export default Navbar