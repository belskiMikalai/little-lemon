import './NavBar.css'

export default function NavBar({styles}) {
  return (
    <nav className='nav-cont' style={styles}>
         <ul className="nav-bar bold">
             <li>
                 <a href='#'>HOME</a>
             </li>
             <li>
                 <a href='#'>ABOUT</a>
             </li>
             <li>
                 <a href='#'>MENU</a>
             </li>
             <li>
                 <a href='#'>RESERVATION</a>
             </li>
             <li>
                 <a href='#'>OREDER ONLINE</a>
             </li>
         </ul>
    </nav>
  )
}
