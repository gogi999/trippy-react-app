import './index.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/trippy-logo.png';
import { MenuItems } from '../MenuItems';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => setIsClicked((prevIsClicked) => !prevIsClicked);

    return (
        <nav className="navbar-items">
            <img className="navbar-logo" src={logo} alt="trippy-logo" />
            <div className="menu-icons" onClick={handleClick}>
                <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, i) => (
                    <li key={i}>
                        <Link to={item.url} className={item.cName}>
                            <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                ))}
                <button>Sign Up</button>
            </ul>
        </nav>
    );
}

export default Navbar;
