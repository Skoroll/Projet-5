import logoRed from '../assets/logo_red.svg'
import logoWhite from '../assets/logo_white.svg'


function Logo({ variant }) {
    let logoSrc = variant === "red" ? logoRed : logoWhite;
    let altText = variant === "red" ? "Logo Red" : "Logo White";

    return (
            <img className="header__logo" src={logoSrc} alt={altText} />
    );
}

export default Logo 