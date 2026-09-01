import { useState } from "react";
import styles from "./CalculadoraTermotanque.module.css";

// ── Constantes técnicas (datos reales Argentina 2026) ──
const PRECIO_GAS_M3_ARS = 650; // $/m³ de gas natural promedio
const TEMPERATURA_RED_C = 15; // temperatura del agua de red
const TEMPERATURA_USO_C = 45; // temperatura de uso (ducha / grifería)
const DELTA_T_C = TEMPERATURA_USO_C - TEMPERATURA_RED_C; // salto térmico
const PODER_CALORIFICO_GAS_KCAL_M3 = 9300; // poder calorífico gas natural
const EFICIENCIA_CALEFON_CONVENCIONAL = 0.8; // eficiencia calefón/termotanque a gas
const HORAS_SOL_PICO_BSAS = 5.5; // HSP térmico promedio anual Buenos Aires
const EFICIENCIA_COLECTOR = 0.55; // eficiencia térmica colector plano
const AREA_COLECTOR_M2 = 2; // área de un colector solar plano estándar
const COBERTURA_SOLAR = 0.75; // % del consumo anual cubierto por el sistema solar
const PRECIO_M2_INSTALADO_USD = 200; // USD por m² de colector instalado (colector + tanque + instalación)
const TC = 1500; // tipo de cambio ARS/USD (referencia julio 2026)
// const VIDA_UTIL_ANOS = 20;
const LITROS_POR_PERSONA_DIA = 50; // consumo promedio de agua caliente sanitaria por persona/día
const TANQUES_ESTANDAR_LITROS = [150, 200, 300, 400, 500, 750, 1000];

type Modo = "personas" | "litros";
type Tipo = "residencial" | "comercial" | "industrial";

interface FormState {
  modo: Modo;
  personas: string;
  litros: string;
  tipo: Tipo;
  nombre: string;
  whatsapp: string;
}

interface Resultado {
  litrosDia: number;
  areaColectorM2: number;
  cantidadColectores: number;
  capacidadTanqueLitros: number;
  ahorroMensualArs: number;
  ahorroAnualArs: number;
  inversionEstimadaUsd: number;
  inversionEstimadaArs: number;
  paybackAnios: number;
  nombre: string;
  whatsapp: string;
}

const TIPO_LABELS: Record<Tipo, string> = {
  residencial: "Residencial",
  comercial: "Comercial (hotel, gimnasio, SUM)",
  industrial: "Industrial / Agro",
};

export const CalculadoraTermotanqueUI: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    modo: "personas",
    personas: "",
    litros: "",
    tipo: "residencial",
    nombre: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [result, setResult] = useState<Resultado | null>(null);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (
      form.modo === "personas" &&
      (!form.personas || parseFloat(form.personas) <= 0)
    )
      e.personas = "Ingresá la cantidad de personas en el hogar";
    if (
      form.modo === "litros" &&
      (!form.litros || parseFloat(form.litros) <= 0)
    )
      e.litros = "Ingresá tu consumo diario de agua caliente";
    if (!form.nombre.trim()) e.nombre = "Ingresá tu nombre";
    if (!form.whatsapp.trim()) e.whatsapp = "Ingresá tu WhatsApp";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calcular = () => {
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      // 1. Consumo diario de agua caliente (litros)
      const litrosDia =
        form.modo === "litros"
          ? parseFloat(form.litros)
          : parseFloat(form.personas) * LITROS_POR_PERSONA_DIA;

      // 2. Energía térmica diaria necesaria
      const energiaDiariaKcal = litrosDia * DELTA_T_C;
      const energiaDiariaKwh = energiaDiariaKcal / 860;

      // 3. Superficie de colectores necesaria (m²)
      // Energía diaria / (HSP × eficiencia del colector)
      const areaColectorM2 =
        energiaDiariaKwh / (HORAS_SOL_PICO_BSAS * EFICIENCIA_COLECTOR);

      // 4. Cantidad de colectores
      const cantidadColectores = Math.max(
        1,
        Math.ceil(areaColectorM2 / AREA_COLECTOR_M2),
      );
      const areaInstaladaM2 = cantidadColectores * AREA_COLECTOR_M2;

      // 5. Capacidad de tanque recomendada (tamaño estándar más cercano)
      const capacidadTanqueLitros =
        TANQUES_ESTANDAR_LITROS.find((t) => t >= litrosDia) ??
        TANQUES_ESTANDAR_LITROS[TANQUES_ESTANDAR_LITROS.length - 1];

      // 6. Ahorro mensual (gas evitado, cubriendo el % de cobertura solar)
      const consumoGasMensualM3 =
        (litrosDia * 30 * DELTA_T_C) /
        (PODER_CALORIFICO_GAS_KCAL_M3 * EFICIENCIA_CALEFON_CONVENCIONAL);
      const ahorroMensualArs = Math.round(
        consumoGasMensualM3 * PRECIO_GAS_M3_ARS * COBERTURA_SOLAR,
      );
      const ahorroAnualArs = ahorroMensualArs * 12;

      // 7. Inversión estimada
      const inversionUsd =
        Math.round((areaInstaladaM2 * PRECIO_M2_INSTALADO_USD) / 100) * 100;
      const inversionArs = inversionUsd * TC;

      // 8. Payback simple
      const payback = parseFloat((inversionArs / ahorroAnualArs).toFixed(1));

      setResult({
        litrosDia: Math.round(litrosDia),
        areaColectorM2: parseFloat(areaInstaladaM2.toFixed(1)),
        cantidadColectores,
        capacidadTanqueLitros,
        ahorroMensualArs,
        ahorroAnualArs,
        inversionEstimadaUsd: inversionUsd,
        inversionEstimadaArs: inversionArs,
        paybackAnios: payback,
        nombre: form.nombre.trim(),
        whatsapp: form.whatsapp.trim(),
      });

      setLoading(false);
    }, 700);
  };

  const waMsg = result
    ? encodeURIComponent(
        `Hola! Soy ${result.nombre}. Usé la calculadora de Kinergia Solar y me dio estos resultados:\n\n` +
          `• Consumo estimado: ${result.litrosDia} litros/día de agua caliente\n` +
          `• Sistema recomendado: ${result.cantidadColectores} colectores (${result.areaColectorM2} m²) + tanque de ${result.capacidadTanqueLitros}L\n` +
          `• Ahorro estimado: $${result.ahorroMensualArs.toLocaleString("es-AR")}/mes\n` +
          `• Tipo: ${TIPO_LABELS[form.tipo]}\n\n` +
          `Quiero una cotización personalizada. Mi WhatsApp: ${result.whatsapp}`,
      )
    : "";

  const resetear = () => {
    setResult(null);
    setForm({
      modo: "personas",
      personas: "",
      litros: "",
      tipo: "residencial",
      nombre: "",
      whatsapp: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {/* ── Izquierda ── */}
          <div className={styles.left}>
            <p className={styles.eyebrow}>Calculadora técnica</p>
            <h1 className={styles.title}>
              Calculá el termotanque solar
              <br />
              <span className={styles.accent}>ideal para vos</span>
            </h1>
            <p className={styles.desc}>
              Ingresá cuántas personas viven en tu casa o tu consumo diario de
              agua caliente y calculamos la superficie de colectores, el tanque
              recomendado y el ahorro real estimado en gas.
            </p>

            <div className={styles.info}>
              <h2 className={styles.infoTitle}>
                ¿Qué es un termotanque solar?
              </h2>
              <p className={styles.infoText}>
                Un termotanque solar usa colectores para captar la energía del
                sol y calentar el agua sanitaria de tu hogar, comercio o
                industria, reduciendo el consumo de gas o electricidad, las
                emisiones y la dependencia de fuentes convencionales de manera
                segura y sustentable.
              </p>

              <h2 className={styles.infoTitle}>
                Tipos de sistemas solares térmicos
              </h2>

              <div className={styles.infoItem}>
                <p className={styles.infoItemTitle}>
                  Por Termosifón
                  <span className={styles.infoItemTag}>
                    Circulación natural
                  </span>
                </p>
                <p className={styles.infoText}>
                  El tanque se ubica sobre los colectores y el agua circula sola
                  por diferencia de densidad, sin necesidad de bombas ni
                  electricidad. Es el sistema más simple y económico, ideal para
                  viviendas.
                </p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoItemTitle}>
                  Por Circulación Forzada
                  <span className={styles.infoItemTag}>Con bomba</span>
                </p>
                <p className={styles.infoText}>
                  Una bomba y un controlador mueven el agua entre los colectores
                  y el tanque, que puede ubicarse en cualquier lugar (incluso
                  dentro de la casa). Ideal para instalaciones grandes o climas
                  fríos.
                </p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoItemTitle}>
                  Con Apoyo Auxiliar
                  <span className={styles.infoItemTag}>Sistema mixto</span>
                </p>
                <p className={styles.infoText}>
                  Combina los colectores solares con un calefón o termotanque
                  convencional (a gas o eléctrico) como respaldo para días
                  nublados o de bajo sol, garantizando agua caliente todo el
                  año.
                </p>
              </div>
            </div>
          </div>

          {/* ── Derecha: formulario / resultado ── */}
          <div className={styles.card}>
            {!result ? (
              <>
                {/* Modo de entrada */}
                <div className={styles.modeSwitch}>
                  <button
                    className={`${styles.modeBtn} ${form.modo === "personas" ? styles.modeBtnActive : ""}`}
                    onClick={() => set("modo", "personas")}
                  >
                    Por personas
                  </button>
                  <button
                    className={`${styles.modeBtn} ${form.modo === "litros" ? styles.modeBtnActive : ""}`}
                    onClick={() => set("modo", "litros")}
                  >
                    Por consumo (litros/día)
                  </button>
                </div>

                {/* Tipo de instalación */}
                <div className={styles.field}>
                  <label className={styles.label}>Tipo de instalación</label>
                  <div className={styles.typeSwitch}>
                    {(Object.keys(TIPO_LABELS) as Tipo[]).map((t) => (
                      <button
                        key={t}
                        className={`${styles.typeBtn} ${form.tipo === t ? styles.typeBtnActive : ""}`}
                        onClick={() => set("tipo", t)}
                      >
                        {TIPO_LABELS[t]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input principal */}
                {form.modo === "personas" ? (
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="c-personas">
                      Cantidad de personas en el hogar
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        id="c-personas"
                        type="number"
                        className={`${styles.input} ${styles.inputSuffixed} ${errors.personas ? styles.inputError : ""}`}
                        placeholder="4"
                        value={form.personas}
                        onChange={(e) => set("personas", e.target.value)}
                        inputMode="numeric"
                      />
                      <span className={styles.suffix}>pers.</span>
                    </div>
                    {errors.personas && (
                      <span className={styles.error}>{errors.personas}</span>
                    )}
                  </div>
                ) : (
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="c-litros">
                      Consumo diario de agua caliente
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        id="c-litros"
                        type="number"
                        className={`${styles.input} ${styles.inputSuffixed} ${errors.litros ? styles.inputError : ""}`}
                        placeholder="200"
                        value={form.litros}
                        onChange={(e) => set("litros", e.target.value)}
                        inputMode="numeric"
                      />
                      <span className={styles.suffix}>L/día</span>
                    </div>
                    {errors.litros && (
                      <span className={styles.error}>{errors.litros}</span>
                    )}
                  </div>
                )}

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="c-nombre">
                    Nombre
                  </label>
                  <input
                    id="c-nombre"
                    type="text"
                    className={`${styles.input} ${errors.nombre ? styles.inputError : ""}`}
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => set("nombre", e.target.value)}
                  />
                  {errors.nombre && (
                    <span className={styles.error}>{errors.nombre}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="c-wa">
                    WhatsApp
                  </label>
                  <input
                    id="c-wa"
                    type="tel"
                    className={`${styles.input} ${errors.whatsapp ? styles.inputError : ""}`}
                    placeholder="11 1234 5678"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                  />
                  {errors.whatsapp && (
                    <span className={styles.error}>{errors.whatsapp}</span>
                  )}
                </div>

                <button
                  className={styles.btn}
                  onClick={calcular}
                  disabled={loading}
                >
                  {loading ? "Calculando..." : "Calcular mi termotanque →"}
                </button>

                <p className={styles.privacy}>
                  No compartimos tus datos. Solo los usamos para tu cotización.
                </p>
              </>
            ) : (
              <>
                <p className={styles.cardTitle}>
                  Tu termotanque solar, {result.nombre}
                </p>

                {/* Métricas principales */}
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <p className={styles.metricVal}>
                      {result.areaColectorM2} m²
                    </p>
                    <p className={styles.metricLabel}>
                      Superficie de colectores
                    </p>
                  </div>
                  <div className={styles.metric}>
                    <p className={styles.metricVal}>
                      {result.cantidadColectores}
                    </p>
                    <p className={styles.metricLabel}>
                      Colectores de {AREA_COLECTOR_M2}m²
                    </p>
                  </div>
                  <div className={styles.metric}>
                    <p className={styles.metricVal}>
                      {result.capacidadTanqueLitros}L
                    </p>
                    <p className={styles.metricLabel}>Tanque recomendado</p>
                  </div>
                </div>

                {/* Ahorro */}
                <div className={styles.savingsBox}>
                  <div className={styles.savingsItem}>
                    <p className={styles.savingsLabel}>
                      Ahorro mensual estimado
                    </p>
                    <p className={styles.savingsAmount}>
                      ${result.ahorroMensualArs.toLocaleString("es-AR")}
                    </p>
                  </div>
                  <div className={styles.savingsDivider} />
                  <div className={styles.savingsItem}>
                    <p className={styles.savingsLabel}>Ahorro anual estimado</p>
                    <p className={styles.savingsAmount}>
                      ${result.ahorroAnualArs.toLocaleString("es-AR")}
                    </p>
                  </div>
                </div>

                {/* Inversión */}
                <div className={styles.investBox}>
                  <div className={styles.investRow}>
                    <span>Inversión estimada</span>
                    <strong>
                      USD {result.inversionEstimadaUsd.toLocaleString("es-AR")}
                    </strong>
                  </div>
                  {/* <div className={styles.investRow}>
                    <span>Tiempo de recupero</span>
                    <strong>{result.paybackAnios} años</strong>
                  </div>
                  <div className={styles.investRow}>
                    <span>Vida útil del sistema</span>
                    <strong>{VIDA_UTIL_ANOS} años</strong>
                  </div> */}
                </div>

                {/* Cierre */}
                <div className={styles.pitch}>
                  <p className={styles.pitchLead}>
                    No es un gasto, es una inversión que genera ahorro.
                  </p>
                  <p className={styles.pitchText}>
                    Esta es la inversión necesaria para dejar de depender del
                    gas o la electricidad para calentar tu agua. Según el tamaño
                    del sistema, el proyecto suele recuperarse en algunos años
                    y, a partir de allí, brindarte más de 15 años de ahorro.
                  </p>
                  <p className={styles.pitchText}>
                    Además, un termotanque solar reduce la demanda de tu calefón
                    o termotanque convencional, alargando su vida útil y bajando
                    el consumo de gas o electricidad en toda la casa.
                  </p>
                  <p className={styles.pitchClose}>
                    Agua caliente para tu hogar. Ahorro para vos.
                  </p>
                </div>

                <a
                  href={`https://wa.me/541132973461?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.874L.057 23.882a.75.75 0 00.981.904l6.184-1.981A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.952-1.355l-.355-.21-3.676 1.177 1.149-3.585-.23-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"
                    />
                  </svg>
                  Quiero mi cotización personalizada
                </a>

                <button className={styles.resetBtn} onClick={resetear}>
                  Calcular de nuevo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
