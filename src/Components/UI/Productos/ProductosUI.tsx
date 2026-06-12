import styles from "./Productos.module.css";

import imgFactura from "../../../images/tu_factura_no_para_de_subir.png";
import imgSistemas from "../../../images/Sistemas_solar.png";
import imgIndustria from "../../../images/Industria_y_galpones.png";
import imgComercio from "../../../images/Difusio_n_para_comercio.png";
import imgAutoSolar from "../../../images/Combo_Auto_ele_ctrico_y_Solar.png";
import imgCasas from "../../../images/Casas_y_barrios_sin_gas.png";
import imgCargadores from "../../../images/Cargadores_de_auto_ele_ctrico_Solplanet_Rev_1.png";

const PRODUCTOS = [
  {
    img: imgFactura,
    alt: "Tu factura no para de subir",
    tag: "Hogares",
    title: "¿Tu factura de luz no para de subir?",
    desc: "La energía solar es la forma más inteligente de ahorrar. En Kinergia analizamos tu factura, ubicación y consumo para diseñar la solución solar ideal para vos.",
    bullets: [
      "Reducí costos",
      "Mayor previsibilidad",
      "Energía sustentable",
      "Soluciones a medida",
    ],
  },
  {
    img: imgSistemas,
    alt: "Combo solar para tu hogar",
    tag: "Hogares",
    title: "Combo Solar para tu hogar",
    desc: "Invertí hoy y empezá a ahorrar mañana. Diseñamos tu sistema a medida, según tu consumo y tu factura eléctrica.",
    bullets: [
      "Paneles solares de alta eficiencia",
      "Inversor ON Grid, Híbrido o con Baterías",
      "Estructura y protecciones",
      "Instalación profesional",
      "Monitoreo y asesoramiento",
    ],
  },
  {
    img: imgIndustria,
    alt: "Energía eficiente para industrias y galpones",
    tag: "Industria",
    title: "Energía más eficiente para tu empresa",
    desc: "Optimizamos el consumo para que la energía deje de ser un problema y se convierta en una ventaja.",
    bullets: [
      "Diagnóstico y análisis energético",
      "Reducción de costos operativos",
      "Integración de energía solar",
      "Soluciones para industrias, galpones y empresas",
    ],
    tagline: "Menor consumo · Menores costos · Más competitividad",
  },
  {
    img: imgComercio,
    alt: "Reducí el costo eléctrico de tu comercio",
    tag: "Comercios",
    title: "Reducí el costo eléctrico de tu comercio",
    desc: "La energía es un costo fijo que impacta directamente en tu rentabilidad. En Kinergia analizamos tu consumo y diseñamos la solución ideal para tu comercio.",
    bullets: [
      "Menos costos, más rentabilidad",
      "Soluciones solares a medida para tu negocio",
      "Mayor previsibilidad ante aumentos",
      "Energía sustentable para crecer mejor",
    ],
  },
  {
    img: imgAutoSolar,
    alt: "Auto eléctrico y energía solar: el combo ideal",
    tag: "Movilidad",
    title: "Auto eléctrico + Energía solar: el combo ideal",
    desc: "Cargá tu auto con energía solar y ganá independencia, ahorro y sustentabilidad. En Kinergia diseñamos la solución completa para vos.",
    bullets: [
      "Menos dependencia de la red",
      "Ahorro en cada carga",
      "Energía limpia y renovable",
      "Soluciones a medida para tu hogar o empresa",
    ],
  },
  {
    img: imgCasas,
    alt: "Casas y barrios sin gas natural",
    tag: "Sin gas natural",
    title: "Atención casas y barrios sin gas natural",
    desc: "¿Dependés 100% de la electricidad? Antes de hacer una obra de gas, conocé una solución más moderna: Energía Solar + Eficiencia Energética.",
    bullets: [
      "No cambiás cocina, termotanque o caldera eléctrica",
      "Usás artefactos eléctricos más seguros",
      "Bajás tu dependencia de la red",
      "Potenciás el ahorro si sumás un auto eléctrico",
      "Recupero estimado en menos de 5 años*",
      "Disfrutás energía solar por más de 20 años",
    ],
    note: "*El recupero depende del consumo, la tarifa y el sistema instalado.",
  },
  {
    img: imgCargadores,
    alt: "Cargadores de auto eléctrico Solplanet",
    tag: "Cargadores",
    title: "Cargadores Solplanet Sol Apollo Series",
    desc: "Si hoy cargás tu auto con un cable de emergencia Modo 2 (IC-CPD), esto te interesa. Disponibles en 7,4 kW · 11 kW · 22 kW.",
    bullets: [
      "Carga más rápida",
      "Mayor seguridad",
      "Control y monitoreo desde la APP",
      "Solución confiable para uso diario",
    ],
  },
];

const TAG_COLORS: Record<string, string> = {
  "Hogares": styles.tagHogares,
  "Industria": styles.tagIndustria,
  "Comercios": styles.tagComercios,
  "Movilidad": styles.tagMovilidad,
  "Sin gas natural": styles.tagSinGas,
  "Cargadores": styles.tagCargadores,
};

const ProductosUI: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <p className={styles.eyebrow}>Kinergia Solar</p>
        <h1 className={styles.title}>Nuestros productos y soluciones</h1>
        <p className={styles.subtitle}>
          Soluciones energéticas para hogares, comercios, industrias y movilidad eléctrica.
        </p>

        <div className={styles.list}>
          {PRODUCTOS.map((p, i) => (
            <div
              key={p.title}
              className={`${styles.item} ${i % 2 === 1 ? styles.itemReverse : ""}`}
            >
              {/* Imagen */}
              <div className={styles.imgWrap}>
                <img src={p.img} alt={p.alt} className={styles.img} />
              </div>

              {/* Contenido */}
              <div className={styles.content}>
                <span className={`${styles.tag} ${TAG_COLORS[p.tag] ?? ""}`}>
                  {p.tag}
                </span>
                <h2 className={styles.itemTitle}>{p.title}</h2>
                <p className={styles.itemDesc}>{p.desc}</p>

                <ul className={styles.bullets}>
                  {p.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={styles.bulletCheck} aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {p.tagline && (
                  <div className={styles.tagline}>{p.tagline}</div>
                )}

                {p.note && (
                  <p className={styles.note}>{p.note}</p>
                )}

                <a
                  href="https://wa.me/541132973461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cta}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.874L.057 23.882a.75.75 0 00.981.904l6.184-1.981A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.952-1.355l-.355-.21-3.676 1.177 1.149-3.585-.23-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Consultanos por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductosUI;
