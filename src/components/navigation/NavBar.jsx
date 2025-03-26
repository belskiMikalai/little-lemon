import './NavBar.css'
import { links } from '../../data.jsx';
import { NavLink } from 'react-router';
export default function NavBar() {
  return (
    <nav>
      <ul className="nav-bar bold">
        {
          links.map(({id, label, href}) => {
            return (
              <li key={id}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}
