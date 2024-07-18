import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import Logo from './Logo';

function Header() {
    return (
        <header>
            <Logo variant="red" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" activeclassname="active">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeclasnsame="active">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
