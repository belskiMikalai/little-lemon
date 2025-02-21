import NavBar from './secondary/NavBar'
import {logo} from '../main.jsx';
import './Header.css'
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Little lemon logo' />
      <NavBar styles={{width: '580px', marginLeft: '80px'}}/>
    </header>
  )
}
