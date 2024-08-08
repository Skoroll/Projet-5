import logoRed from "../assets/logo_red.svg";
import logoWhite from "../assets/logo_white.svg";

function Logo({ version }) {
  let logoSrc = version === "red" ? logoRed : logoWhite;
  let altText = version === "red" ? "Logo Kasa rouge" : "Logo Kasa blanc";

  return <img className="header__logo" src={logoSrc} alt={altText} />;
}

export default Logo;
