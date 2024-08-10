import "../styles/components/Footer.scss";
import Logo from "./Logo";

function Footer() {
  //Appel du logo dans sa variante blanche.
  return (
    <footer>
      <Logo version="white" />
      <p className="footer__legal">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
