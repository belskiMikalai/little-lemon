
import './Header.css'
import NavBar from '../navigation/NavBar.jsx'
import MobileMenu from '../navigation/MobileMenu.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { logo } from '../../data.jsx';

export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Little lemon logo' />
      <NavBar/>
      <MobileMenu/>
      <a className='shopping-cart' href='#'><FontAwesomeIcon icon={faCartShopping} size='2xl' /></a>
    </header>
  )
}
