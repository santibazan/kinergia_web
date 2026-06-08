import { useState } from "react";
import { Link } from "react-router";
import styles from "./Navbar.module.css";
import logo from "../../../images/logo.png";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/nosotros" },
  // { label: "Proyectos", href: "/projects" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

const SERVICES = [
  { label: "Oil & Gas", href: "/servicios/oilgas" },
  { label: "Solar", href: "/servicios/solar" },
];

const NavbarUI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Kinergia" className={styles.logoImg} />
        </Link>

        {/* Links — desktop */}
        {/* Links — desktop */}
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className={styles.navLink}>
              Sobre nosotros
            </Link>
          </li>
          {/* <li>
            <Link to="/projects" className={styles.navLink}>
              Proyectos
            </Link>
          </li> */}

          {/* Dropdown Servicios */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={styles.dropdownTrigger}>
              Servicios
              <svg
                className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ""}`}
            >
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className={styles.dropdownItem}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/contacto" className={styles.navLink}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa — mobile */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileNavLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Servicios móvil */}
          <li>
            <button
              className={styles.mobileDropdownTrigger}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Servicios
              <svg
                className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {servicesOpen && (
              <ul className={styles.mobileSubMenu}>
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link
                      to={s.href}
                      className={styles.mobileSubLink}
                      onClick={closeMenu}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUI;
