import styles from "./Solar.module.css";

const WHO_WE_ARE = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    text: "Empresa de ingeniería y tecnología energética",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    text: "Optimizamos el uso de la energía en viviendas, comercios e industrias",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    text: "Reducimos costos energéticos y emisiones",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    text: "Integramos eficiencia energética y energías renovables",
  },
];

const CHALLENGES = [
  "Crecimiento del costo de la energía",
  "Necesidad de mayor eficiencia energética en instalaciones",
  "Reducción de emisiones y presión regulatoria",
  "La transición energética requiere ingeniería y tecnología",
];

const STEPS = [
  { num: "1", title: "Medir", desc: "En qué gastamos la energía" },
  { num: "2", title: "Identificar pérdidas", desc: "Y saber cuánto nos cuesta esa pérdida" },
  { num: "3", title: "Optimizar", desc: "Evaluar reducción de consumo energético. Evaluación de tecnologías." },
  { num: "4", title: "Transformar", desc: "Integrar energías renovables" },
  { num: "5", title: "Resultado", desc: "Menor consumo, menores costos y mayor sustentabilidad" },
];

const SERVICES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: "Medición y gestión de huella de carbono",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    name: "Diagnóstico y análisis energético",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    name: "Optimización energética de las instalaciones",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    name: "Diseño e implementación de soluciones solares",
  },
];

const VALUE_PROPS = [
  "Reducción de costos energéticos",
  "Mejora en el desempeño energético",
  "Integración de eficiencia energética y renovables",
  "Reducción de huella de carbono",
];

const SolarUI: React.FC = () => {
  return (
    <section className={styles.section}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <p className={styles.heroTag}>Kinergia · Solar</p>
        <h1 className={styles.heroTitle}>
          Ingeniería y Tecnología<br />
          Energética para un<br />
          Futuro Sustentable
        </h1>
        <p className={styles.heroBody}>
          Somos una empresa de ingeniería especializada en eficiencia energética
          y energías renovables. Optimizamos el uso de la energía en viviendas,
          comercios e industrias, reduciendo costos y emisiones.
        </p>
        <p className={styles.heroBody}>
          La transición energética ya está en marcha. El costo de la energía
          convencional tiende a aumentar, mientras que las tecnologías renovables
          reducen su costo año a año.
        </p>
        <div className={styles.heroBadge}>
          <span className={styles.heroDot} />
          Soluciones eficientes para un futuro sustentable
        </div>
      </div>

      {/* ── Misión y Visión ── */}
      <div className={styles.mvSection}>
        <div className={styles.mvCard}>
          <div className={styles.mvCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h3 className={styles.mvCardTitle}>Misión</h3>
          <p className={styles.mvCardText}>
            Diseñar e implementar soluciones energéticas eficientes para
            optimizar consumos, reducir costos y promover un desarrollo
            sustentable.
          </p>
        </div>

        <div className={styles.mvCard}>
          <div className={styles.mvCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className={styles.mvCardTitle}>Visión</h3>
          <p className={styles.mvCardText}>
            Ser referente en ingeniería y tecnología energética, acompañando
            la transición hacia un uso más eficiente y sustentable de la
            energía.
          </p>
        </div>
      </div>

      {/* ── Quiénes somos ── */}
      <p className={styles.sectionLabel}>Quiénes somos</p>
      <div className={styles.whoGrid}>
        {WHO_WE_ARE.map((w) => (
          <div key={w.text} className={styles.whoCard}>
            <div className={styles.whoIcon}>{w.icon}</div>
            <p className={styles.whoText}>{w.text}</p>
          </div>
        ))}
      </div>

      {/* ── El desafío energético ── */}
      <div className={styles.challengeBox}>
        <h2 className={styles.challengeTitle}>El desafío energético</h2>
        <p className={styles.challengeIntro}>
          La transición energética ya está en marcha. El costo de la energía
          convencional tiende a aumentar, mientras que las tecnologías renovables
          reducen su costo año a año.
        </p>
        <div className={styles.challengeBars}>
          {CHALLENGES.map((c) => (
            <div key={c} className={styles.challengeBar}>
              <span className={styles.challengeBarDash} aria-hidden="true" />
              <span className={styles.challengeBarText}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Nuestro enfoque ── */}
      <p className={styles.sectionLabel}>Nuestro enfoque</p>
      <p className={styles.enfoqueMotto}>"Lo que no medimos no lo gestionamos"</p>
      <div className={styles.steps}>
        {STEPS.map((s, i) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            {i < STEPS.length - 1 && <div className={styles.stepArrow} aria-hidden="true" />}
            <div className={styles.stepContent}>
              <strong className={styles.stepTitle}>{s.title}</strong>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Servicios ── */}
      <p className={styles.sectionLabel}>Servicios</p>
      <div className={styles.services}>
        {SERVICES.map((s) => (
          <div key={s.name} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{s.icon}</div>
            <p className={styles.serviceName}>{s.name}</p>
          </div>
        ))}
      </div>

      {/* ── Propuesta de valor ── */}
      <div className={styles.valueBox}>
        <h2 className={styles.valueTitle}>Propuesta de valor</h2>
        <p className={styles.valueIntro}>
          Kinergia Solar integra eficiencia energética y energías renovables para
          transformar el modo en que viviendas, comercios e industrias consumen
          energía — con menor costo y mayor sustentabilidad.
        </p>
        <div className={styles.valueBars}>
          {VALUE_PROPS.map((v) => (
            <div key={v} className={styles.valueBar}>
              <span className={styles.valueBarDash} aria-hidden="true" />
              <span className={styles.valueBarText}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Perfil del profesional ── */}
      <div className={styles.profile}>
        <div className={styles.profileAvatar}>AS</div>
        <div className={styles.profileInfo}>
          <div className={styles.profileHeader}>
            <strong className={styles.profileName}>Aldo Sarelli</strong>
            <a
              href="https://www.linkedin.com/in/aldo-sarelli-05304851"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="LinkedIn de Aldo Sarelli"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Ver CV
            </a>
          </div>
          <p className={styles.profileRole}>Ingeniero en Petróleo</p>
          <p className={styles.profileBio}>
            Diplomatura con certificación en Gestión de Energía ITBA Eurem (Vottun).
            Diplomado en Energía en Universidad Nacional de Cuyo.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <strong className={styles.ctaHeading}>¿Querés optimizar tu consumo energético?</strong>
          <span className={styles.ctaContact}>
            aldo.sarelli@kinergiasas.com · +54 11 32973461
          </span>
        </div>
        <a href="/contacto" className={styles.ctaBtn}>
          Contactanos
        </a>
      </div>

    </section>
  );
};

export default SolarUI;
