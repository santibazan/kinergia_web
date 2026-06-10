import { Link } from "react-router";
import styles from "./Footer.module.css";
import logo from "../../../images/logo.png"

const currentYear = new Date().getFullYear();

const FooterUI: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Columna 1 — Marca */}
        <div className={styles.brand}>
          <img
            src={logo}
            alt="Kinergia"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Soluciones eficientes para un futuro sustentable.
          </p>
        </div>

        {/* Columna 2 — Navegación */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.link}>Inicio</Link></li>
            <li><Link to="/nosotros" className={styles.link}>Sobre nosotros</Link></li>
            <li><Link to="/projects" className={styles.link}>Proyectos</Link></li>
            <li><Link to="/contacto" className={styles.link}>Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3 — Servicios */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Servicios</h4>
          <ul className={styles.linkList}>
            <li><span className={styles.listItem}>Diagnóstico energético</span></li>
            <li><span className={styles.listItem}>Optimización de instalaciones</span></li>
            <li><span className={styles.listItem}>Soluciones solares</span></li>
            <li><span className={styles.listItem}>Huella de carbono</span></li>
          </ul>
        </div>

        {/* Columna 4 — Contacto */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contacto</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="mailto:contacto@kinergia.com" className={styles.link}>
                contacto@kinergia.com
              </a>
            </li>
            <li>
              <a href="tel:+541100000000" className={styles.link}>
                +54 11 0000-0000
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {currentYear} Kinergia. Todos los derechos reservados. Desarrollado por{" "}
          <span className={styles.owner}>Santiago Bazán</span>.
        </p>
      </div>
    </footer>
  );
};

export default FooterUI;
