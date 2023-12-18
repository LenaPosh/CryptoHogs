import { NavLink } from "react-router-dom";
import Logo from '../img/CryptoHogs.png';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <div className="nav-container">
            <div className='nav-container-block'>
                <div className="logo-container">
                    <NavLink to="/">
                        <img className="logo" alt="Logo" src={Logo} />
                    </NavLink>
                </div>

                <div className="nav-links">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? "nav_item active" : "nav_item"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav_item active" : "nav_item"}
                    >
                        Our Products
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className={({ isActive }) => isActive ? "nav_item active" : "nav_item"}
                    >
                        Explore
                    </NavLink>
                    <NavLink
                        to="/prices"
                        className={({ isActive }) => isActive ? "nav_item active" : "nav_item"}
                    >
                        Prices
                    </NavLink>

                </div>

                <div className="nav-buttons">
                    <button className="button-menu">WhitePaper</button>
                    <NavLink
                        to="/signin"
                        className={({ isActive }) => isActive ? "nav_item active" : "nav_item"}
                    >
                        Sign In
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default NavMenu;


