import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Jhonny Iham Torres Vilcapoma</p>
      <div className="redes-sociales">
        <a
          href="https://www.linkedin.com/in/jhonny-iham-torres-vilcapoma-690219283/"
          target="_blank"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/JhonnyIham" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <Link to="/contacto">
          <ion-icon name="mail-open-outline"></ion-icon>
        </Link>
        <a className='btn' href="https://drive.google.com/file/d/1sbt0-Ch02fdXLcNOTQddCmyIguP_UkBM/view?usp=sharings" target="_blank">
        CV
        </a>
      </div>
    </footer>
  );
};
export default Footer;
