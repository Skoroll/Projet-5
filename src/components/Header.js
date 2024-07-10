import '../styles/Header.css'
import Nav from './Nav'
import Logo from './Logo'

function Header() {
    return (
        <header>
             <Logo variant="red" />
            <Nav />
        </header>
    )
}

export default Header