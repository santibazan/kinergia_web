import styles from "./OilGas.module.css";

const PILLARS = [
  {
    name: "Eficiencia",
    desc: "Estudios de eficiencia energética y optimización de recursos",
    accent: "blue",
  },
  {
    name: "Facilities",
    desc: "Ingeniería básica y soporte a instalaciones de superficie. Definición de ventanas operativas",
    accent: "red",
  },
  {
    name: "Mantenimiento",
    desc: "Planificación, ingeniería de mantenimiento y mejora de confiabilidad. Análisis de Causa Raíz",
    accent: "steel",
  },
  {
    name: "Integridad",
    desc: "Gestión de recipientes, tanques con foco técnico y regulatorio",
    accent: "dark",
  },
  {
    name: "Seguridad",
    desc: "Riesgo de procesos, HAZOP, What If, LOPA. Análisis de Consecuencias Cuali-Cuantitativos",
    accent: "gray",
  },
];

const VALUE_PROPS = [
  "Diseño adecuado para las condiciones operativas",
  "Operar y mantener de acuerdo al diseño",
  "Mejor confiabilidad operativa",
  "Cumplimiento normativo y soporte a decisiones",
  "Reducción de riesgos operacionales",
  "Reducción de OPEX y CAPEX",
];

const TEAM = [
  {
    initials: "AR",
    name: "Alejandro Rodríguez Llana",
    bio: "Gestión integral de proyectos Oil & Gas (Upstream e instalaciones de superficie) en Argentina, España, Libia y Venezuela. +20 años de experiencia.",
    linkedin: "https://linkedin.com/in/rodrillana",
  },
  {
    initials: "AS",
    name: "Aldo Gabriel Sarelli",
    bio: "Operación y mantenimiento dentro de la industria del Oil & Gas, especializado en análisis y gestión de activos fijos (integridad mecánica, mantenimiento y gerenciamiento riesgos de procesos). +25 años de experiencia.",
    linkedin: "https://www.linkedin.com/in/aldo-sarelli-05304851",
  },
  {
    initials: "EC",
    name: "Eduardo Chalita",
    bio: "Ingeniero Mecánico especializado en equipos rotativos, mantenimiento industrial y gestión de proyectos. Proyectos en Argentina, Brasil, Venezuela, Arabia Saudita y Puerto Rico. +25 años de experiencia.",
    linkedin: "https://linkedin.com/in/eduardo-chalita-58ab788",
  },
  {
    initials: "FF",
    name: "F. Fabián Esposito",
    bio: "Ingeniero Químico con experiencia en proyectos de infraestructura de larga escala: LNG / FLNG / Hydrogen / Ammonia / CCUS, Gas Processing. +35 años de experiencia.",
    linkedin: "https://linkedin.com/in/f-fabián-espósito-b82b80a",
  },
  {
    initials: "MA",
    name: "Marcelo Alvez",
    bio: "Ingeniero de Riesgo de Procesos en Oil & Gas. +30 años de experiencia en la industria.",
    linkedin: "https://linkedin.com/in/marcelo-alvez-ba061b9",
  },
];

const OilGasUI: React.FC = () => {
  return (
    <section className={styles.section}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <p className={styles.heroTag}>Kinergia · Oil &amp; Gas</p>
        <h1 className={styles.heroTitle}>
          Eficiencia, Facilities, Mantenimiento,<br />
          Integridad Mecánica y Análisis de Riesgo<br />
          para Downstream, Midstream y Upstream
        </h1>
        <p className={styles.heroBody}>
          Somos un equipo de ingenieros con más de 25 años de experiencia en Oil
          &amp; Gas. Aportamos experiencia real en operación, mantenimiento,
          integridad, diseño e implementación de proyectos upstream.
        </p>
        <p className={styles.heroBody}>
          Conocemos el campo, entendemos la operación y desarrollamos soluciones
          técnicas prácticas para mejorar seguridad, confiabilidad y desempeño.
        </p>
        <div className={styles.heroBadge}>
          <span className={styles.heroDot} />
          Experiencia técnica y de gestión aplicada al desarrollo, operación y confiabilidad de activos de superficie
        </div>
      </div>

      {/* ── Áreas de servicio ── */}
      <p className={styles.sectionLabel}>Áreas de servicio</p>

      <div className={styles.pillars}>
        {PILLARS.map((p) => (
          <div
            key={p.name}
            className={`${styles.pillar} ${styles[`pillar_${p.accent}`]}`}
          >
            <p className={styles.pillarName}>{p.name}</p>
            <p className={styles.pillarDesc}>{p.desc}</p>
          </div>
        ))}
      </div>

      <p className={styles.pillarsTagline}>
        Una sola mirada para activos de superficie: disponibilidad, seguridad, cumplimiento y costo.
      </p>

      {/* ── Propuesta de valor ── */}
      <div className={styles.valueBox}>
        <h2 className={styles.valueTitle}>Propuesta de valor</h2>
        <p className={styles.valueIntro}>
          Kinergia Oil &amp; Gas busca transformarse en un socio técnico confiable
          para operadores, contratistas y proyectos que necesiten fortalecer sus
          facilities, su gestión de mantenimiento y la integridad de sus activos.
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

      {/* ── Equipo ── */}
      <div className={styles.team}>
        <h2 className={styles.teamTitle}>Nuestro equipo</h2>
        <div className={styles.members}>
          {TEAM.map((m) => (
            <div key={m.name} className={styles.member}>
              <div className={styles.avatar}>{m.initials}</div>
              <div className={styles.memberInfo}>
                <div className={styles.memberHeader}>
                  <strong className={styles.memberName}>{m.name}</strong>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                    aria-label={`LinkedIn de ${m.name}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver CV
                  </a>
                </div>
                <p className={styles.memberBio}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <strong className={styles.ctaHeading}>¿Hablamos sobre tu operación?</strong>
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

export default OilGasUI;
