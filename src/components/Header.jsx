import logo from '/littleLemonLogo.png'
import NavBar from './secondary/NavBar'
import './Header.css'
export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Little lemon logo' />
      <NavBar styles={{width: '580px', marginLeft: '80px'}}/>
    </header>
  )
}
