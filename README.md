# 🔍 OmniCheck: Lector de Códigos de Barras y QR - Professional V2

![Version](https://img.shields.io/badge/version-2.0.0-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build](https://img.shields.io/badge/status-ready_for_production-blue.svg)

OmniCheck es una solución de grado industrial para la lectura de códigos de barras (EAN-13, EAN-8, Code 128) y códigos QR. Este repositorio contiene una implementación web premium optimizada para navegadores y un script robusto en Python.

---

## 📑 Documentación del Proyecto
Para una explicación detallada del desarrollo, objetivos y conclusiones, consulte el archivo de memoria:
👉 **[Memoria_Proyecto_OmniCheck.docx](./Memoria_Proyecto_OmniCheck.docx)**

---

## 🌐 1. Versión Web Premium (Demo en Vivo)
La versión web ofrece una interfaz moderna basada en **Glassmorphism** con funcionalidades avanzadas.

### 🔗 [ACCEDER A LA DEMO EN VIVO](https://luismoratocanet28-dev.github.io/lector_de_barras/)

### ✨ Características V2:
- **Escaneo en Tiempo Real**: Detección instantánea usando la cámara del dispositivo.
- **Historial Persistente**: Guarda automáticamente tus escaneos anteriores en el navegador.
- **Exportación CSV**: Descarga el historial de lecturas directamente a Excel/CSV.
- **Feedback Premium**: Notificaciones sonoras y efectos visuales de celebración (confetti) tras cada captura.
- **Librerías Profesionales**: Potenciado por `html5-qrcode`, `Lucide Icons` y `canvas-confetti`.

---

## 🐍 2. Versión Python (Script Industrial)
Ideal para integraciones locales o sistemas de inventario que no dependen del navegador.

### Instalación Rápida:
```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Ejecutar el escáner
python "codigo de barras.py"
```

---

## 🛠️ Tecnologías y Arquitectura
- **Frontend**: HTML5, CSS3 Moderno, JavaScript (ES6+).
- **Backend/Script**: Python 3.x, OpenCV, PyZbar.
- **Bibliotecas**:
  - `html5-qrcode` (Procesamiento de imagen web)
  - `python-docx` (Generación de documentación)
  - `Lucide` (Iconografía moderna)

---

## 📁 Estructura del Repositorio
- `index.html` → Aplicación Web principal.
- `Memoria_Proyecto_OmniCheck.docx` → Documentación técnica completa.
- `codigo de barras.py` → Script principal en Python.
- `style.css` & `main.js` → Diseño y lógica premium.
- `requirements.txt` → Dependencias del sistema.

---

<p align="center">Desarrollado con precisión industrial por <a href="https://github.com/luismoratocanet28-dev">Luis Morato Canet</a></p>
