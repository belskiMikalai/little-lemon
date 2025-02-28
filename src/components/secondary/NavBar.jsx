import './NavBar.css'

export default function NavBar({aStyle, navStyle}) {
    const links = [
        {
            label: 'Home',
            href: '#',
        },
        {
            label: 'About',
            href: '#',
        },
        {
            label: 'Menu',
            href: '#',
        },
        {
            label: 'Reservation',
            href: '#',
        },
        {
            label: 'Order Online',
            href: '#',
        },
    ]
  return (
    <nav style={navStyle}>
         <ul className="nav-bar bold">
            {
                links.map(({label, href, id}) => {
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
