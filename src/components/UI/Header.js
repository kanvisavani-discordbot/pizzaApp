import './Header.css';
import { FaBeer } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return (
        <div>
            <h1 className='bg-menu-header'>{props.pageTitle}</h1>
        </div>
    );
}

export default Header;
