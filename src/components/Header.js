import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Logo from './Logo';

function Header() {
    return (
        <header>
            <Logo variant="red" />
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
