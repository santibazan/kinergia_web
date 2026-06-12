import { useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "./LandingUi.module.css";

const DESAFIOS = [
  {
    title: "Crecimiento del costo de la energía",
    desc: "Las tarifas eléctricas aumentan año a año sin señales de freno. Quienes no toman medidas hoy pagan más mañana.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    from: "left",
  },
  {
    title: "Necesidad de mayor eficiencia energética",
    desc: "Viviendas, comercios e industrias desperdician energía por falta de diagnóstico y tecnología adecuada.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    from: "right",
  },
  {
    title: "Reducción de emisiones y presión regulatoria",
    desc: "La normativa ambiental es cada vez más exigente. Reducir la huella de carbono ya no es opcional.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    from: "left",
  },
  {
    title: "La transición energética requiere ingeniería",
    desc: "Adoptar energías renovables sin un diseño técnico adecuado genera problemas. La tecnología sola no alcanza.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    from: "right",
  },
];

export const DesafioSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.desafio}>
      <div className={styles.desafioInner}>

        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.desafioHeader} ${styles.fadeUp}`}
        >
          <p className={styles.desafioEyebrow}>El contexto</p>
          <h2 className={styles.desafioTitle}>El desafío energético</h2>
          <p className={styles.desafioSubtitle}>
            La transición energética ya está en marcha. El costo de la energía
            convencional tiende a aumentar, mientras que las tecnologías
            renovables reducen su costo año a año.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.desafioGrid}>
          {DESAFIOS.map((d, i) => (
            <div
              key={d.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.desafioCard} ${d.from === "left" ? styles.slideLeft : styles.slideRight}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.desafioIcon}>{d.icon}</div>
              <h3 className={styles.desafioCardTitle}>{d.title}</h3>
              <p className={styles.desafioCardDesc}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          ref={bannerRef}
          className={`${styles.desafioBanner} ${styles.fadeUp}`}
        >
          <span>La solución es ingeniería + tecnología energética aplicada.</span>
          <Link to="/contacto" className={styles.desafioBannerCta}>
            Hablemos
          </Link>
        </div>

      </div>
    </section>
  );
};
