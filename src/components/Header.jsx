import logo from '/littleLemonLogo.png'
import NavBar from './NavBar'
import './Header.css'
export default function Header() {
  return (
    <header>
      <div className='menu-container'>
        <img className='logo' src={logo} alt='Little lemon logo' />
        <NavBar />
      </div>
    </header>
  )
}
