import '../styles/Footer.css'
import Logo from './Logo'

function Footer() {
    return (
        <footer>
           <Logo variant="white" />
            <p className='footer__legal' >© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer