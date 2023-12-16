import {NavLink} from "react-router-dom";
import Logo from '../img/CryptoHogs.png'

const NavMenu = () => {
    return (
        <div className="nav">
            <NavLink to="/">
                <img className="logo" alt="" src={Logo} />
            </NavLink>
        </div>
    )
}

export default NavMenu;
