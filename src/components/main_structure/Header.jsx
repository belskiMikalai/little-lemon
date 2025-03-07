import NavBar from '../navigation/NavBar.jsx'

import MobileMenu from '../navigation/MobileMenu.jsx';
import {logo} from '../../data.jsx';
import './Header.css'
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Little lemon logo' />
      <NavBar navStyle={{width: '580px'}}/>
      <MobileMenu>
        <NavBar />
      </MobileMenu>
    </header>
  )
}
