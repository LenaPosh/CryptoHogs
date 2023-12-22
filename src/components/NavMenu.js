import {NavLink, useLocation} from "react-router-dom";
import Logo from '../img/CryptoHogs.png';
import './NavMenu.css';
import {useEffect, useState} from "react";

const NavMenu = () => {

    const location = useLocation();
    const isSignInActive = location.pathname === '/signup' || location.pathname === '/forgot-password';

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => {
            console.log("Menu State Before:", prevState);
            const newState = !prevState;
            console.log("Menu State After:", newState); // Добавлено логирование после изменения состояния
            return newState;
        });
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.nav-mobile') && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="nav-container" onClick={handleClickOutside}>
            <div className='nav-container-block'>
                <button className="hamburger-menu"  onClick={toggleMenu}>
                    &#9776;
                </button>
                <div className="logo-container">
                    <NavLink to="/" className="logo-link">
                        <img className="logo" alt="Logo" src={Logo} />
                    </NavLink>
                </div>

                <div className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
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
                        {
                            isMobile ? (
                                <NavLink to="/whitepaper" className="nav_item">
                                    WhitePaper
                                </NavLink>
                            ) : (
                                <button className="button-menu">WhitePaper</button>
                            )
                        }
                        <NavLink to="/signin" className={`nav_item ${isSignInActive ? 'active' : ''}`}>
                        Sign In
                        </NavLink>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default NavMenu;


