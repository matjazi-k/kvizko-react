import { NavLink } from 'react-router-dom'
import type { NavItemProps } from './NavItem.types.ts'
import './NavItem.css'

const getStateClassName = (baseClassName: string, activeClassName: string, inactiveClassName: string, isActive: boolean) =>
    [baseClassName, isActive ? activeClassName : inactiveClassName].join(' ')

function NavItem({ 
    to, 
    label, 
    iconName,
    activeColorClassName = 'primary-container',
    activeHoverColorClassName = 'hover-secondary-container',
    activeTextColorClassName = 'on-primary-container',
    activeHoverTextColorClassName = 'hover-on-secondary-container',
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
                            `${activeColorClassName} ${activeHoverColorClassName} material-symbols-filled active`,
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
                            `${activeTextColorClassName} ${activeHoverTextColorClassName}`, 
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