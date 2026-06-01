import { NavLink } from 'react-router-dom'
import type { NavItemProps } from './NavItem.types.ts'
import './NavItem.css'

const getStateClassName = (baseClassName: string, activeClassName: string, inactiveClassName: string, isActive: boolean) =>
    [baseClassName, isActive ? activeClassName : inactiveClassName].join(' ')

function NavItem({ 
    to, 
    label, 
    iconName,
    activeColor = 'primary-container',
    activeHoverColor = 'hover-secondary-container',
    activeTextColor = 'on-primary-container',
    activeHoverTextColor = 'hover-on-secondary-container',
}: NavItemProps) {
    return (
        <NavLink
            to={to}
            end={to === '/'}
            className="nav-item snap-transition text-on-surface-variant"
        >
            {({ isActive }) => (
                <>
                    <span
                        className={getStateClassName(
                            'nav-item__icon snap-transition',
                            `${activeColor} ${activeHoverColor} material-symbols-filled active`,
                            'hover-surface-container-highest material-symbols-outlined inactive',
                            isActive,
                        )}
                        aria-hidden="true"
                    >
                        {iconName}
                    </span>
                    <span
                        className={getStateClassName(
                            'nav-item__label snap-transition fw-500', 
                            `${activeTextColor} ${activeHoverTextColor}`, 
                            'text-on-surface-container', 
                            isActive
                        )}
                    >
                        {label}
                    </span>
                </>
            )}
        </NavLink>
    )
}

export default NavItem