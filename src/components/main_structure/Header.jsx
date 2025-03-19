
import './Header.css'
import NavBar from '../navigation/NavBar.jsx'
import MobileMenu from '../navigation/MobileMenu.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { logo } from '../../data.jsx';
import Button from '../functional_elem/Button.jsx';

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <img className='logo' src={logo} alt='Little lemon logo' />
        <NavBar/>
        <MobileMenu/>
        <Button type="navigation" className="shopping-cart">
          <FontAwesomeIcon icon={faCartShopping} size='2xl' />
        </Button>
      </div>
    </header>
  )
}
