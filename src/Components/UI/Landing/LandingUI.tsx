import { Link, useNavigate } from "react-router";
import styles from "./LandingUi.module.css";
import { DesafioSection } from "./DesafiaSeccion";


const SOLAR_TAGS = [
  { label: "Nuestro enfoque", hash: "#enfoque" },
  { label: "Servicios",       hash: "#servicios" },
  { label: "Propuesta de valor", hash: "#propuesta" },
];

const OIL_TAGS = [
  { label: "Servicios",          hash: "#servicios" },
  { label: "Propuesta de valor", hash: "#propuesta" },
  { label: "Equipo",             hash: "#equipo" },
];

export const LandingUI = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Kinergia</p>
          <h1 className={styles.heroTitle}>
            Ingeniería y Tecnología<br />Energéticas
          </h1>
          <p className={styles.heroSubtitle}>
            Soluciones eficientes para un futuro sustentable
          </p>
        </div>

        <div className={styles.unitsRow}>

          {/* ── Solar ── */}
          <div className={`${styles.unitCard} ${styles.unitCardSolar}`}>
            <div className={styles.unitCardTop}>
              <div className={`${styles.unitIcon} ${styles.unitIconSolar}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <div>
                <p className={styles.unitLabel}>Unidad de negocio</p>
                <h2 className={styles.unitTitle}>Kinergia Solar</h2>
              </div>
            </div>

            <p className={styles.unitDesc}>
              Nuestra mision es diseñar e implementar soluciones energéticas para optimizar consumos.
              <br />
              Nuestra vision es ser referente en ingenieria y tecnología energética, acompañando la transición hacia un uso más eficiente y sustentable.
            </p>

            <div className={styles.unitTagsSection}>
              <p className={styles.unitTagsLabel}>Ir a sección</p>
              <ul className={styles.unitTags}>
                {SOLAR_TAGS.map((t) => (
                  <li key={t.label}>
                    <button
                      className={`${styles.unitTag} ${styles.unitTagSolar}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/servicios/solar${t.hash}`);
                      }}
                    >
                      {t.label}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/servicios/solar" className={`${styles.unitCta} ${styles.unitCtaSolar}`}>
              Conocer soluciones solares
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          {/* ── Oil & Gas ── */}
          <div className={`${styles.unitCard} ${styles.unitCardOil}`}>
            <div className={styles.unitCardTop}>
              <div className={`${styles.unitIcon} ${styles.unitIconOil}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4"/>
                  <line x1="12" y1="8" x2="12" y2="2"/>
                  <line x1="8" y1="12" x2="2" y2="12"/>
                  <line x1="16" y1="12" x2="22" y2="12"/>
                  <path d="M12 16v6"/>
                </svg>
              </div>
              <div>
                <p className={`${styles.unitLabel} ${styles.unitLabelOil}`}>Unidad de negocio</p>
                <h2 className={`${styles.unitTitle} ${styles.unitTitleOil}`}>Kinergia Oil &amp; Gas</h2>
              </div>
            </div>

            <p className={`${styles.unitDesc} ${styles.unitDescOil}`}>
              Facilities, mantenimiento, integridad mecánica, eficiencia
              energética y análisis de riesgo de procesos para activos de superficie.
            </p>

            <div className={styles.unitTagsSection}>
              <p className={`${styles.unitTagsLabel} ${styles.unitTagsLabelOil}`}>Ir a sección</p>
              <ul className={styles.unitTags}>
                {OIL_TAGS.map((t) => (
                  <li key={t.label}>
                    <button
                      className={`${styles.unitTag} ${styles.unitTagOil}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/servicios/oilgas${t.hash}`);
                      }}
                    >
                      {t.label}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/servicios/oilgas" className={`${styles.unitCta} ${styles.unitCtaOil}`}>
              Ver servicios Oil &amp; Gas
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ── Desafío energético ── */}
      <DesafioSection/>
    </>
  );
};
