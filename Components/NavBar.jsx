import logo from '../src/assets/Fremologo.jpg'
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <nav className='Header'>
            <img className="logo" src={logo} alt="Fremo Designs Logo"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li>About</li>
                <li><Link to="/Contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar