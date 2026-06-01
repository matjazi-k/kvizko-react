import './Navbar.css'
import NavItem from './NavItem'

const navItems = [
  { to: '/', label: 'Kvizko', iconName: 'quiz' },
  { to: '/structure', label: 'Structura', iconName: 'description' },
  { to: '/create', label: 'Ustvari', iconName: 'add_box' },
  /* { to: '/settings', label: 'Nastavitve', iconName: 'settings' } */
]

function Navbar() {
  return (
    <nav className="navbar surface-container g-sm py-lg px-none">
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} iconName={item.iconName} />
        ))}
    </nav>
  )
}

export default Navbar