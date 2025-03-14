
import './MobileMenu.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from '../functional_elem/Button';
import NavBar from './NavBar';

const MobileMenu = () => {
    const [ isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    }
    return (
        <div className='mobile-menu'>
            {
                isMenuOpen ? (
                    <div className='menu-sidebar'>
                        <NavBar />
                    </div>
                ) : null
            }
            <Button type="close-menu">
                <FontAwesomeIcon onClick={handleMenuOpen} icon={isMenuOpen ? faXmark : faBars} size='2xl'/>
            </Button>
        </div>
    );
};

export default MobileMenu;