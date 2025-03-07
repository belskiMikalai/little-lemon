import './NavBar.css'
import { links } from '../../data.jsx';
export default function NavBar({aStyle, navStyle}) {

  return (
    <nav style={navStyle}>
         <ul className="nav-bar bold">
            {
                links.map(({label, href}, id) => {
                    return (
                        <li key={id}>
                            <a style={aStyle} href={href}>{label}</a>
                        </li>
                    );
                })
            }
         </ul>
    </nav>
  )
}
