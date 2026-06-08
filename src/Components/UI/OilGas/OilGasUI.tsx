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
    desc: "Gestión de recipientes y buques con foco normativo y regulatorio",
    accent: "dark",
  },
  {
    name: "Seguridad",
    desc: "Riesgo de procesos, HAZOP, What If, LOPA. Análisis de Consecuencias Cuali-Cuantitativo",
    accent: "gray",
  },
];

const VALUE_PROPS = [
  "Mejor priorización técnica y de costos",
  "Mayor disponibilidad y confiabilidad",
  "Cumplimiento normativo y soporte a decisiones",
  "Reducción de riesgo operativo",
];

const TEAM = [
  {
    initials: "RL",
    name: "Rodrigo Liana",
    bio: "Gestión integral de proyectos Oil & Gas (Upstream e instalaciones de superficie) en Argentina, España, Libia y Venezuela. +20 años de experiencia.",
  },
  {
    initials: "AS",
    name: "Aldo Gabriel Sarelli",
    bio: "Operación y mantenimiento, integridad técnica y gestión de activos en la industria del Oil & Gas. +35 años de experiencia.",
  },
  {
    initials: "EC",
    name: "Eduardo Chalita",
    bio: "Ingeniería mecánica con foco en industria petrolera y energética. Proyectos en Argentina, Brasil, Arabia Saudita y Puerto Rico. +25 años de experiencia.",
  },
  {
    initials: "FF",
    name: "F. Fabián Esposito",
    bio: "Ingeniería de procesos de larga escala: LNG / FNG / Hydrogen / Ammonia / CO2R. Proyectos en Gas Licuado Argentina. +35 años de experiencia.",
  },
  {
    initials: "MA",
    name: "Marcelo Alvez",
    bio: "Análisis de Riesgo de Procesos en Oil & Gas. +30 años de experiencia en la industria.",
  },
];

const OilGasUI: React.FC = () => {
  return (
    <section className={styles.section}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <p className={styles.heroTag}>Kinergia · Oil &amp; Gas</p>
        <h1 className={styles.heroTitle}>
          Eficiencia, Facilities y<br />
          Integridad Mecánica<br />
          para el Upstream
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
          Experiencia técnica y de gestión aplicada a activos de superficie
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

      {/* ── Propuesta de valor ── */}
      <div className={styles.valueBox}>
        <h2 className={styles.valueTitle}>Propuesta de valor</h2>
        <p className={styles.valueIntro}>
          Kinergia Oil &amp; Gas busca transformarse en un socio técnico
          confiable para operadores, contratistas y proyectos que necesiten
          fortalecer sus facilities, gestión de mantenimiento e integridad de
          sus activos.
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
                <strong className={styles.memberName}>{m.name}</strong>
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
            sarellialdo@gmail.com · +54 11 32973461
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
