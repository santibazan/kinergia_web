import { Link } from "react-router";
import styles from "./LandingUi.module.css";
import imagenFamilia from "../../../images/imagenFamilia.png";

export const LandingUI = () => {
  return (
    <>
      {/* Hero con imagen */}
      <section className={styles.imagen}>
        <div className={styles.overlay} />
        <div className={styles.contenedorPrincipal}>
          <h1>Ingeniería y Tecnología Energéticas</h1>
          <h4>Soluciones eficientes para un futuro sustentable</h4>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className={styles.misionVision}>
        <div className={styles.mvContainer}>
          <div className={styles.mvImageWrapper}>
            <img
              src={imagenFamilia}
              alt="Familia junto a paneles solares"
              className={styles.mvImage}
            />
          </div>

          <div className={styles.mvCards}>
            <div className={styles.mvCard}>
              <h3 className={styles.mvCardTitle}>Misión</h3>
              <p className={styles.mvCardText}>
                Diseñar e implementar soluciones energéticas eficientes para
                optimizar consumos, reducir costos y promover un desarrollo
                sustentable.
              </p>
            </div>

            <div className={styles.mvCard}>
              <h3 className={styles.mvCardTitle}>Visión</h3>
              <p className={styles.mvCardText}>
                Ser referente en ingeniería y tecnología energética, acompañando
                la transición hacia un uso más eficiente y sustentable de la
                energía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className={styles.servicios}>
        <div className={styles.serviciosInner}>
          <p className={styles.serviciosLabel}>Nuestros servicios</p>
          <h2 className={styles.serviciosTitle}>¿En qué podemos ayudarte?</h2>

          <div className={styles.serviciosGrid}>

            {/* Solar */}
            <Link to="/servicios/solar" className={`${styles.serviceCard} ${styles.serviceCardSolar}`}>
              <div className={styles.serviceIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceCardTitle}>Solar</h3>
                <p className={styles.serviceCardDesc}>
                  Diseño e instalación de sistemas solares fotovoltaicos para hogares,
                  industrias y proyectos de gran escala. Energía limpia, ahorro real.
                </p>
                <span className={styles.serviceCardCta}>
                  Ver servicio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Oil & Gas */}
            <Link to="/servicios/oilgas" className={`${styles.serviceCard} ${styles.serviceCardOil}`}>
              <div className={styles.serviceIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
                  <line x1="12" y1="8" x2="12" y2="2" />
                  <line x1="8" y1="12" x2="2" y2="12" />
                  <line x1="16" y1="12" x2="22" y2="12" />
                  <path d="M12 16v6" />
                </svg>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceCardTitle}>Oil &amp; Gas</h3>
                <p className={styles.serviceCardDesc}>
                  Eficiencia, facilities, mantenimiento e integridad mecánica para
                  operaciones upstream. Más de 25 años de experiencia en el campo.
                </p>
                <span className={styles.serviceCardCta}>
                  Ver servicio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};
