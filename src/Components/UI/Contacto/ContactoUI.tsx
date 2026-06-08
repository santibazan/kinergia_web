import { useState } from "react";
import styles from "./Contacto.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactoUI() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email inválido";
    if (!form.message.trim()) newErrors.message = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const infoItems = [
    {
      label: "Email",
      value: "contacto@solarproject.com",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Teléfono",
      value: "+54 261 000-0000",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Ubicación",
      value: "Mendoza, Argentina",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      title: "Facebook",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      title: "Twitter",
      path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      title: "LinkedIn",
      path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.gridBg} />

      <div className={styles.container}>
        {/* LEFT: Info */}
        <div className={styles.info}>
          {/* <p className={styles.eyebrow}>Contacto</p> */}
          <h1 className={styles.title}>
            Hablemos de<br />
            energía <span className={styles.titleAccent}>solar</span>
          </h1>
          <p className={styles.desc}>
            Estamos listos para ayudarte a diseñar la solución fotovoltaica
            ideal para tu proyecto o empresa.
          </p>

          <div className={styles.infoItems}>
            {infoItems.map(({ label, value, icon }) => (
              <div key={label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{icon}</div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.socialRow}>
            {socials.map(({ title, path }) => (
              <a key={title} href="#" className={styles.socialBtn} title={title}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className={styles.successTitle}>¡Mensaje enviado!</p>
              <p className={styles.successText}>Te responderemos en menos de 24 horas.</p>
              <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className={styles.formGrid}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  className={`${styles.fieldInput} ${errors.name ? styles.hasError : ""}`}
                  placeholder="Juan García"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`${styles.fieldInput} ${errors.email ? styles.hasError : ""}`}
                  placeholder="juan@empresa.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
              </div>

              <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
                <label className={styles.fieldLabel} htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  className={`${styles.fieldTextarea} ${errors.message ? styles.hasError : ""}`}
                  placeholder="Contanos sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
              </div>

              <div className={styles.submitRow}>
                <button className={styles.submitBtn} onClick={handleSubmit}>
                  Enviar mensaje →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
