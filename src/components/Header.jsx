import NavBar from './secondary/NavBar.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {logo} from '../data.jsx';
import './Header.css'
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Little lemon logo' />
      <NavBar navStyle={{width: '580px'}}/>
      <FontAwesomeIcon icon={faBars} size='2xl'/>
    </header>
  )
}
