//library import
import { Link } from 'react-router-dom';

//image import
import Logo from '../..//images/Logo.png';

//CSS import
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav>
            <Link to='/' id='homeBtn'><img src={Logo} alt="home logo" /></Link>
        </nav>    
    );
}

export default Navbar;