import { Link } from "react-router";
import styles from "./LandingUi.module.css";

export const LandingUI = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Kinergia</p>
          <h1 className={styles.heroTitle}>
            Ingeniería y Tecnología<br />Energéticas
          </h1>
          <p className={styles.heroSubtitle}>
            Soluciones eficientes para un futuro sustentable
          </p>
        </div>
      </section>

      {/* ── Unidades de negocio ── */}
      <section className={styles.units}>
        <div className={styles.unitsInner}>

          {/* Solar */}
          <div className={styles.unitCard}>
            <div className={styles.unitCardTop}>
              <div className={`${styles.unitIcon} ${styles.unitIconSolar}`}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <div>
                <p className={styles.unitLabel}>Unidad de negocio</p>
                <h2 className={styles.unitTitle}>Kinergia Solar</h2>
              </div>
            </div>

            <p className={styles.unitDesc}>
              Eficiencia energética, energía solar, cargadores eléctricos y
              gestión de consumos para hogares, comercios e industrias.
            </p>

            <ul className={styles.unitTags}>
              {["Eficiencia energética", "Paneles solares", "Cargadores eléctricos", "Gestión de consumos"].map((t) => (
                <li key={t} className={`${styles.unitTag} ${styles.unitTagSolar}`}>{t}</li>
              ))}
            </ul>

            <Link to="/servicios/solar" className={`${styles.unitCta} ${styles.unitCtaSolar}`}>
              Conocer soluciones solares
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Oil & Gas */}
          <div className={`${styles.unitCard} ${styles.unitCardOil}`}>
            <div className={styles.unitCardTop}>
              <div className={`${styles.unitIcon} ${styles.unitIconOil}`}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
                  <line x1="12" y1="8" x2="12" y2="2" />
                  <line x1="8" y1="12" x2="2" y2="12" />
                  <line x1="16" y1="12" x2="22" y2="12" />
                  <path d="M12 16v6" />
                </svg>
              </div>
              <div>
                <p className={`${styles.unitLabel} ${styles.unitLabelOil}`}>Unidad de negocio</p>
                <h2 className={`${styles.unitTitle} ${styles.unitTitleOil}`}>Kinergia Oil &amp; Gas</h2>
              </div>
            </div>

            <p className={`${styles.unitDesc} ${styles.unitDescOil}`}>
              Facilities, mantenimiento, integridad mecánica, eficiencia
              energética y análisis de riesgo de procesos para activos de
              superficie.
            </p>

            <ul className={styles.unitTags}>
              {["Facilities", "Mantenimiento", "Integridad mecánica", "Análisis de riesgo"].map((t) => (
                <li key={t} className={`${styles.unitTag} ${styles.unitTagOil}`}>{t}</li>
              ))}
            </ul>

            <Link to="/servicios/oilgas" className={`${styles.unitCta} ${styles.unitCtaOil}`}>
              Ver servicios Oil &amp; Gas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
