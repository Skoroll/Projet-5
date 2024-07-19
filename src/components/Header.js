import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.scss';
import Logo from './Logo';

function Header() {
    const location = useLocation();

    return (
        <header>
            <NavLink
                to="/home">
                <Logo variant="red" />
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/home" 
                            className={({ isActive }) => isActive || location.pathname === '/' ? 'active' : ''}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
