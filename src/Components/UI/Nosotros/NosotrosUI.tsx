import styles from "./Nosotros.module.css";

/* ── ICONS ── */
const IconBolt = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconLeaf = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);
const IconArrow = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);
const IconGlobe = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
  </svg>
);

/* ── DATA ── */
const quadItems = [
  {
    text: "Empresa de ingeniería y tecnología energética",
    icon: <IconBolt />,
  },
  {
    text: "Optimizamos el uso de la energía en viviendas, comercios e industrias",
    icon: <IconGlobe />,
  },
  {
    text: "Reducimos costos energéticos y emisiones",
    icon: <IconArrow />,
  },
  {
    text: "Integramos eficiencia energética y energías renovables",
    icon: <IconLeaf />,
  },
];

const challengeItems = [
  "Crecimiento del costo de la energía",
  "Necesidad de mayor eficiencia energética en instalaciones",
  "Reducción de emisiones y presión regulatoria",
  "La transición energética requiere ingeniería y tecnología",
];

/* ── COMPONENT ── */
export default function NosotrosUI() {
  return (
    <section className={styles.section}>
      <div className={styles.gridBg} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.container}>

        {/* ══ BLOQUE 1: QUIÉNES SOMOS ══ */}
        <div className={styles.whoBlock}>
          {/* Left: heading + description */}
          <div className={styles.whoLeft}>
            {/* <p className={styles.eyebrow}>Kinergia</p> */}
            <h2 className={styles.sectionTitle}>
              Quiénes <span>somos</span>
            </h2>
            <p className={styles.whoDesc}>
              Somos una empresa de ingeniería y tecnología especializada en
              soluciones energéticas integrales para el sector residencial,
              comercial e industrial.
            </p>
          </div>

          {/* Right: 2×2 quad */}
          <div className={styles.quadGrid}>
            {quadItems.map((item, i) => (
              <div key={i} className={styles.quadCard}>
                <div className={styles.quadIcon}>{item.icon}</div>
                <p className={styles.quadText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* ══ BLOQUE 2: EL DESAFÍO ENERGÉTICO ══ */}
        <div className={styles.challengeBlock}>
          {/* Left: challenge list */}
          <div className={styles.challengeLeft}>
            {challengeItems.map((text, i) => (
              <div key={i} className={styles.challengeItem}>
                <span className={styles.challengeDot} />
                <p className={styles.challengeText}>{text}</p>
              </div>
            ))}
          </div>

          {/* Right: heading + footnote */}
          <div className={styles.challengeRight}>
            <div className={styles.challengeHeader}>
              <p className={styles.eyebrow}>Contexto</p>
              <h2 className={styles.sectionTitle}>
                El desafío <span>energético</span>
              </h2>
              <p className={styles.sectionDesc}>
                El mercado energético atraviesa una transformación profunda.
                Conocer sus drivers es el primer paso para actuar con inteligencia.
              </p>
            </div>

            <div className={styles.challengeFootnote}>
              <strong>La transición energética ya está en marcha</strong>
              <p>
                El costo de la energía convencional tiende a aumentar, mientras
                que las tecnologías renovables reducen su{" "}
                <em>costo año a año</em>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
