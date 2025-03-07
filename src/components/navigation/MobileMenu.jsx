
import './MobileMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({children}) => {
    return (
        <div className='mobile-menu'>
            <div className='menu-sidebar'>
                { children }
                bfd xvcfd
            </div>
            <a href="#" className="menu-button">
                <FontAwesomeIcon icon={faBars} size='2xl'/>
            </a>
        </div>
    );
};

export default MobileMenu;