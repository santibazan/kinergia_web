import React from "react";
import styles from "./Solar.module.css";

const SERVICES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    name: "Optimización energética de las instalaciones",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
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

// Posiciones de los 5 nodos en círculo (r=110, centro 220,188)
// ángulos: -90°, -90°+72°, -90°+144°, -90°+216°, -90°+288°
const CX = 220, CY = 188, R = 110;
const ang = (i: number) => (i / 5) * 2 * Math.PI - Math.PI / 2;
const nx = (i: number) => CX + R * Math.cos(ang(i));
const ny = (i: number) => CY + R * Math.sin(ang(i));

const STEPS = [
  { title: "Medir",       label: ["Medir:", "en qué gastamos", "la energía"] },
  { title: "Identificar", label: ["Identificar pérdidas:", "y saber cuánto", "nos cuesta"] },
  { title: "Optimizar",   label: ["Optimizar:", "evaluar reducción", "de consumo"] },
  { title: "Transformar", label: ["Transformar:", "integrar energías", "renovables"] },
  { title: "Resultado",   label: ["Resultado:", "menor consumo", "y sustentabilidad"] },
];

const arcPath = (i: number) => {
  const a0 = ang(i) + 0.22;
  const a1 = ang((i + 1) % 5) - 0.22;
  return `M${CX + R * Math.cos(a0)},${CY + R * Math.sin(a0)} A${R},${R},0,0,1,${CX + R * Math.cos(a1)},${CY + R * Math.sin(a1)}`;
};

const SolarUI: React.FC = () => {
  return (
    <section className={styles.section}>

      {/* ── 1. Misión y Visión ── */}
      <div className={styles.mvSection}>
        <div className={styles.mvCard}>
          <div className={styles.mvCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h3 className={styles.mvCardTitle}>Misión</h3>
          <p className={styles.mvCardText}>
            Diseñar e implementar soluciones energéticas eficientes para
            optimizar consumos, reducir costos y promover un desarrollo sustentable.
          </p>
        </div>
        <div className={styles.mvCard}>
          <div className={styles.mvCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className={styles.mvCardTitle}>Visión</h3>
          <p className={styles.mvCardText}>
            Ser referente en ingeniería y tecnología energética, acompañando
            la transición hacia un uso más eficiente y sustentable de la energía.
          </p>
        </div>
      </div>

      {/* ── 2. Hero ── */}
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

      {/* ── 3. Nuestro enfoque ── */}
      <p id="enfoque" className={styles.sectionLabel}>Nuestro enfoque</p>
      <p className={styles.enfoqueMotto}>"Lo que no medimos no lo gestionamos"</p>

      <div className={styles.loopWrapper}>
        <svg viewBox="0 0 440 400" className={styles.loopSvg} aria-label="Ciclo continuo de mejora energética">
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M1,1 L7,4 L1,7 Z" fill="#16a34a"/>
            </marker>
          </defs>

          {/* Guía circular */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#d1fae5" strokeWidth="2" strokeDasharray="5 5"/>

          {/* Arcos con flechas */}
          {[0,1,2,3,4].map(i => (
            <path key={i} d={arcPath(i)} fill="none" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arr)"/>
          ))}

          {/* Nodos */}
          {STEPS.map((s, i) => (
            <g key={i}>
              <circle cx={nx(i)} cy={ny(i)} r="22" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2.5"/>
              <text x={nx(i)} y={ny(i) - 3} textAnchor="middle" fontSize="14" fontWeight="700" fill="#16a34a" fontFamily="sans-serif">{i + 1}</text>
              <text x={nx(i)} y={ny(i) + 10} textAnchor="middle" fontSize="8" fill="#16a34a" fontFamily="sans-serif">{s.title}</text>
            </g>
          ))}

          {/* Etiquetas alrededor */}
          {STEPS.map((s, i) => {
            const lr = R + 56;
            const lx = CX + lr * Math.cos(ang(i));
            const ly = CY + lr * Math.sin(ang(i));
            return s.label.map((line, j) => (
              <text
                key={`${i}-${j}`}
                x={lx} y={ly + (j - 0.5) * 14}
                textAnchor="middle"
                fontSize={j === 0 ? "11" : "10"}
                fontWeight={j === 0 ? "600" : "400"}
                fill={j === 0 ? "#374151" : "#6b7280"}
                fontFamily="sans-serif"
              >
                {line}
              </text>
            ));
          })}

          {/* Ícono central */}
          <text x={CX} y={CY + 10} textAnchor="middle" fontSize="30" fill="#bbf7d0" fontFamily="sans-serif">↺</text>
        </svg>
      </div>

      {/* ── 4. Servicios ── */}
      <p id="servicios" className={styles.sectionLabel}>Servicios</p>
      <div className={styles.services}>
        {SERVICES.map((s) => (
          <div key={s.name} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{s.icon}</div>
            <p className={styles.serviceName}>{s.name}</p>
          </div>
        ))}
      </div>

      {/* ── 5. Propuesta de valor ── */}
      <div id="propuesta"className={styles.valueBox}>
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

      {/* ── 6. Perfil ── */}
      <div id="equipo" className={styles.profile}>
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

      {/* ── 7. CTA ── */}
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
