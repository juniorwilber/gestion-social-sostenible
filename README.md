# Gestión Social y Desarrollo Sostenible 🌱

Sitio web informativo, accesible y *responsive* para promocionar el **Programa de Gestión Social y Desarrollo Sostenible** de una Facultad de Ciencias Sociales. Presenta la propuesta del programa, su plan de estudios y el proceso de admisión en tres páginas conectadas.

**Qué resuelve:** le da al programa una presencia web clara y profesional que comunica su valor, organiza la información (programa, admisión, contacto) y guía al visitante hacia la inscripción, con buena experiencia desde el celular.

---

## 🧰 Tecnologías

- **HTML5** — estructura y contenido semántico.
- **CSS3** — diseño *Mobile First*, componentes propios y estilos de impresión.
- **JavaScript** — validación del formulario e interactividad, sin frameworks.
- **Bootstrap 5.3.3** + **Bootstrap Icons 1.11.3** — grid, navbar, carrusel, acordeón e íconos (vía CDN, con *Subresource Integrity*).

---

## 🖼️ Captura de pantalla

<!-- Reemplaza la ruta por tu captura, por ejemplo: img/screenshot.png -->
![Captura de pantalla del sitio](URL_DE_LA_CAPTURA)

---

## 🌐 Sitio en vivo

<!-- Pega aquí el enlace a la web publicada (GitHub Pages, Netlify, Vercel, etc.) -->
🔗 [Ver web en vivo](URL_DE_LA_WEB_EN_VIVO)

---

## 📂 Estructura del proyecto

```text
gestion-social-sostenible/
├── index.html          → Página principal (presentación del programa)
├── programa.html       → Detalle del programa y plan de estudios
├── admision.html       → Proceso de admisión + formulario validado
├── css/
│   └── styles.css      → Estilos propios (Mobile First, componentes, impresión)
├── js/
│   └── main.js         → Validación del formulario e interactividad
├── img/                → Imágenes locales
├── informe/
│   └── informe.html    → Informe del proyecto (decisiones de diseño y accesibilidad)
└── README.md
```

---

## ✨ Funcionalidades

- **Navegación responsive** con navbar y menú hamburguesa (Bootstrap Collapse).
- **Enfoque Mobile First**: probado en 375 px, 768 px y 1440 px.
- **Formulario de admisión validado**: nombres, correo, teléfono (9–12 dígitos), tipo de documento, mensaje con contador y aceptación de términos; muestra errores accesibles y enfoca el primer campo inválido.
- **Componentes Bootstrap**: carrusel, acordeón (plan de estudios / FAQ), alertas y utilidades.
- **Accesibilidad**: HTML semántico, foco visible, `aria-*` en componentes dinámicos, imágenes con `alt` e íconos decorativos con `aria-hidden`.

---

## 🔒 Seguridad

- Recursos externos (Bootstrap y Bootstrap Icons) cargados con **versión fija** e **integridad (SRI)** + `crossorigin`, para que el navegador rechace cualquier archivo alterado.
- Sin backend, sin base de datos y sin envío de datos a terceros: el formulario se valida y procesa en el propio navegador.

---

## 🚀 Cómo verlo localmente

Es un sitio estático. Para que Bootstrap y las fuentes carguen bien, sírvelo con un servidor local:

```bash
# Con Python instalado
python -m http.server 8000
# Luego abre http://localhost:8000
```

---

## 📌 Notas

- Los datos del programa (institución, contacto) son de demostración para fines de portafolio.
