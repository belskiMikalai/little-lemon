import './NavBar.css'
import { links } from '../../data.jsx';
export default function NavBar() {

  return (
    <nav>
         <ul className="nav-bar bold">
            {
                links.map(({label, href}, id) => {
                    return (
                        <li key={id}>
                            <a href={href}>{label}</a>
                        </li>
                    );
                })
            }
         </ul>
    </nav>
  )
}
