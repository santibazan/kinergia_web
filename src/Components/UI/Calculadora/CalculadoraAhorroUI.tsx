import { useState } from "react";
import styles from "./CalculadoraAhorro.module.css";

// ── Constantes técnicas (datos reales Argentina 2026) ──
const PRECIO_KWH_ARS = 165;        // $/kWh promedio residencial AMBA sin subsidio (julio 2026)
const HORAS_SOL_PICO_BSAS = 4.5;  // HSP promedio anual Buenos Aires
const EFICIENCIA_SISTEMA = 0.82;   // pérdidas por temperatura, inversor, cableado
const POTENCIA_PANEL_W = 550;      // panel estándar monocristalino actual
const PRECIO_WP_USD = 0.35;        // precio instalado por Wp (USD, mercado ARG 2026)
const TC = 1454;                   // tipo de cambio ARS/USD (referencia julio 2026)
const VIDA_UTIL_ANOS = 25;

type Modo = "factura" | "kwh";
type Tipo = "residencial" | "comercial" | "industrial";

interface FormState {
  modo: Modo;
  factura: string;
  kwh: string;
  tipo: Tipo;
  nombre: string;
  whatsapp: string;
}

interface Resultado {
  consumoKwh: number;
  potenciaSistemaKw: number;
  cantidadPaneles: number;
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
  comercial: "Comercial",
  industrial: "Industrial / Galpón",
};

const CalculadoraAhorroUi: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    modo: "factura",
    factura: "",
    kwh: "",
    tipo: "residencial",
    nombre: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [result, setResult] = useState<Resultado | null>(null);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (form.modo === "factura" && (!form.factura || parseFloat(form.factura) <= 0))
      e.factura = "Ingresá el monto de tu factura";
    if (form.modo === "kwh" && (!form.kwh || parseFloat(form.kwh) <= 0))
      e.kwh = "Ingresá tu consumo mensual en kWh";
    if (!form.nombre.trim()) e.nombre = "Ingresá tu nombre";
    if (!form.whatsapp.trim()) e.whatsapp = "Ingresá tu WhatsApp";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const calcular = () => {
    if (!validate()) return;
    setLoading(true);

    setTimeout(() => {
      // 1. Consumo mensual en kWh
      const consumoKwh =
        form.modo === "kwh"
          ? parseFloat(form.kwh)
          : parseFloat(form.factura) / PRECIO_KWH_ARS;

      // 2. Potencia del sistema necesaria (kWp)
      // Energía diaria necesaria / (HSP × eficiencia)
      const energiaDiariaKwh = consumoKwh / 30;
      const potenciaSistemaKw = energiaDiariaKwh / (HORAS_SOL_PICO_BSAS * EFICIENCIA_SISTEMA);

      // 3. Cantidad de paneles
      const cantidadPaneles = Math.ceil((potenciaSistemaKw * 1000) / POTENCIA_PANEL_W);

      // 4. Ahorro mensual (asumimos sistema cubre el 90% del consumo)
      const coberturaPorc = 0.90;
      const ahorroMensualArs = Math.round(consumoKwh * coberturaPorc * PRECIO_KWH_ARS);
      const ahorroAnualArs = ahorroMensualArs * 12;

      // 5. Inversión estimada
      const potenciaInstalada = cantidadPaneles * POTENCIA_PANEL_W; // Wp
      const inversionUsd = Math.round((potenciaInstalada * PRECIO_WP_USD) / 100) * 100;
      const inversionArs = inversionUsd * TC;

      // 6. Payback simple
      const payback = parseFloat((inversionArs / ahorroAnualArs).toFixed(1));

      setResult({
        consumoKwh: Math.round(consumoKwh),
        potenciaSistemaKw: parseFloat(potenciaSistemaKw.toFixed(2)),
        cantidadPaneles,
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
        `• Consumo estimado: ${result.consumoKwh} kWh/mes\n` +
        `• Sistema recomendado: ${result.potenciaSistemaKw} kWp (${result.cantidadPaneles} paneles)\n` +
        `• Ahorro estimado: $${result.ahorroMensualArs.toLocaleString("es-AR")}/mes\n` +
        `• Tipo: ${TIPO_LABELS[form.tipo]}\n\n` +
        `Quiero una cotización personalizada. Mi WhatsApp: ${result.whatsapp}`
      )
    : "";

  const resetear = () => {
    setResult(null);
    setForm({ modo: "factura", factura: "", kwh: "", tipo: "residencial", nombre: "", whatsapp: "" });
    setErrors({});
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>

        {/* ── Izquierda ── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Calculadora técnica</p>
          <h2 className={styles.title}>
            Calculá el sistema solar<br />
            <span className={styles.accent}>ideal para vos</span>
          </h2>
          <p className={styles.desc}>
            Ingresá tu consumo o el monto de tu factura y calculamos la potencia
            del sistema, la cantidad de paneles y el ahorro real estimado.
          </p>

          <ul className={styles.bullets}>
            <li><span className={styles.check}>✓</span> Cálculo basado en HSP reales de Buenos Aires (4,5 h/día)</li>
            <li><span className={styles.check}>✓</span> Precio por kWh actualizado al mercado 2026</li>
            <li><span className={styles.check}>✓</span> Estimación de inversión y tiempo de recupero</li>
            <li><span className={styles.check}>✓</span> Cotización personalizada sin costo</li>
          </ul>

          {result && (
            <div className={styles.techNote}>
              <p className={styles.techNoteTitle}>Parámetros usados</p>
              <p>HSP Buenos Aires: <strong>4,5 h/día</strong></p>
              <p>Eficiencia del sistema: <strong>82%</strong></p>
              <p>Panel estándar: <strong>{POTENCIA_PANEL_W}W monocristalino</strong></p>
              <p>Precio kWh AMBA: <strong>${PRECIO_KWH_ARS}/kWh</strong></p>
              <p>Vida útil sistema: <strong>{VIDA_UTIL_ANOS} años</strong></p>
            </div>
          )}
        </div>

        {/* ── Derecha: formulario / resultado ── */}
        <div className={styles.card}>
          {!result ? (
            <>
              {/* Modo de entrada */}
              <div className={styles.modeSwitch}>
                <button
                  className={`${styles.modeBtn} ${form.modo === "factura" ? styles.modeBtnActive : ""}`}
                  onClick={() => set("modo", "factura")}
                >
                  Por factura ($)
                </button>
                <button
                  className={`${styles.modeBtn} ${form.modo === "kwh" ? styles.modeBtnActive : ""}`}
                  onClick={() => set("modo", "kwh")}
                >
                  Por consumo (kWh)
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
              {form.modo === "factura" ? (
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="c-factura">
                    Monto de tu factura mensual de luz
                  </label>
                  <div className={styles.inputWrap}>
                    <span className={styles.prefix}>$</span>
                    <input
                      id="c-factura"
                      type="number"
                      className={`${styles.input} ${errors.factura ? styles.inputError : ""}`}
                      placeholder="150.000"
                      value={form.factura}
                      onChange={(e) => set("factura", e.target.value)}
                      inputMode="numeric"
                    />
                  </div>
                  {errors.factura && <span className={styles.error}>{errors.factura}</span>}
                </div>
              ) : (
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="c-kwh">
                    Consumo mensual (lo encontrás en tu factura)
                  </label>
                  <div className={styles.inputWrap}>
                    <input
                      id="c-kwh"
                      type="number"
                      className={`${styles.input} ${errors.kwh ? styles.inputError : ""}`}
                      placeholder="400"
                      value={form.kwh}
                      onChange={(e) => set("kwh", e.target.value)}
                      inputMode="numeric"
                    />
                    <span className={styles.suffix}>kWh</span>
                  </div>
                  {errors.kwh && <span className={styles.error}>{errors.kwh}</span>}
                </div>
              )}

              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-nombre">Nombre</label>
                <input
                  id="c-nombre"
                  type="text"
                  className={`${styles.input} ${errors.nombre ? styles.inputError : ""}`}
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => set("nombre", e.target.value)}
                />
                {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-wa">WhatsApp</label>
                <input
                  id="c-wa"
                  type="tel"
                  className={`${styles.input} ${errors.whatsapp ? styles.inputError : ""}`}
                  placeholder="11 1234 5678"
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                />
                {errors.whatsapp && <span className={styles.error}>{errors.whatsapp}</span>}
              </div>

              <button className={styles.btn} onClick={calcular} disabled={loading}>
                {loading ? "Calculando..." : "Calcular mi sistema →"}
              </button>

              <p className={styles.privacy}>
                No compartimos tus datos. Solo los usamos para tu cotización.
              </p>
            </>
          ) : (
            <>
              <p className={styles.cardTitle}>Tu sistema solar, {result.nombre}</p>

              {/* Métricas principales */}
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <p className={styles.metricVal}>{result.potenciaSistemaKw} kWp</p>
                  <p className={styles.metricLabel}>Potencia del sistema</p>
                </div>
                <div className={styles.metric}>
                  <p className={styles.metricVal}>{result.cantidadPaneles}</p>
                  <p className={styles.metricLabel}>Paneles de {POTENCIA_PANEL_W}W</p>
                </div>
                <div className={styles.metric}>
                  <p className={styles.metricVal}>{result.consumoKwh}</p>
                  <p className={styles.metricLabel}>kWh/mes consumo</p>
                </div>
              </div>

              {/* Ahorro */}
              <div className={styles.savingsBox}>
                <div className={styles.savingsItem}>
                  <p className={styles.savingsLabel}>Ahorro mensual estimado</p>
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

              {/* Inversión y payback */}
              <div className={styles.investBox}>
                <div className={styles.investRow}>
                  <span>Inversión estimada</span>
                  <strong>USD {result.inversionEstimadaUsd.toLocaleString("es-AR")}</strong>
                </div>
                <div className={styles.investRow}>
                  <span>Tiempo de recupero</span>
                  <strong>{result.paybackAnios} años</strong>
                </div>
                <div className={styles.investRow}>
                  <span>Vida útil del sistema</span>
                  <strong>{VIDA_UTIL_ANOS} años</strong>
                </div>
              </div>

              <p className={styles.disclaimer}>
                * Estimación orientativa. Los valores reales dependen de la orientación del techo,
                ubicación exacta, consumo histórico y modelo de equipo elegido.
              </p>

              <a
                href={`https://wa.me/541132973461?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.139 1.535 5.874L.057 23.882a.75.75 0 00.981.904l6.184-1.981A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.952-1.355l-.355-.21-3.676 1.177 1.149-3.585-.23-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
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
  );
};

export default CalculadoraAhorroUi;
