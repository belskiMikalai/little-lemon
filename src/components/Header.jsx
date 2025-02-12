import logo from './assets/littleLemonLogo.png'
import NavBar from './NavBar'
export default function Header() {
  return (
    <header>
        <img src={logo} alt='Little lemon logo' />
        <NavBar />
    </header>
  )
}
