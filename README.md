# 🔍 OmniCheck: Lector de Códigos de Barras y QR

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.8%2B-blue)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)

OmniCheck es una solución versátil y potente para la lectura de códigos de barras (EAN-13, EAN-8, Code 128, etc.) y códigos QR. Este repositorio ofrece tanto una implementación robusta en **Python** para uso local/industrial como una **Web App interactiva** lista para ser desplegada en GitHub Pages.

---

## 🚀 Características Principales

- **Doble Implementación**: Disponibilidad en script de Python (OpenCV + PyZbar) y aplicación Web (HTML5 + JS).
- **Lectura en Tiempo Real**: Procesamiento instantáneo desde cualquier cámara conectada.
- **Soporte Multi-formato**: Lee QR, EAN-13, EAN-8, Code 128, Code 39 y más.
- **Interfaz Moderna**: Diseño web minimalista, oscuro y optimizado para una experiencia de usuario fluida.
- **Fácil Despliegue**: Listo para funcionar en local o en la nube mediante GitHub Pages.

---

## 💻 1. Versión Python (Script Local)

Ideal para integraciones en sistemas de gestión, inventarios o automatización local.

### Requisitos previos
- Python 3.8 o superior.
- Una cámara web funcional.

### Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/luismoratocanet28-dev/lector_de_barras.git
   cd lector_de_barras
   ```

2. Instala las dependencias necesarias:
   ```bash
   pip install -r requirements.txt
   ```

### Uso
Ejecuta el script principal:
```bash
python "codigo de barras.py"
```
El script abrirá una ventana con tu cámara. En cuanto detecte un código válido, imprimirá el resultado en la consola y cerrará la ventana automáticamente.

---

## 🌐 2. Versión Web (GitHub Pages)

### 🔗 [Ver Demo En Vivo](https://luismoratocanet28-dev.github.io/lector_de_barras/)
*(Nota: Reemplaza este enlace con tu URL real una vez actives GitHub Pages)*

La versión web permite realizar escaneos directamente desde el navegador sin instalar nada, utilizando la librería `html5-qrcode`.

### ✨ Versión Premium V2 (Nueva)
He creado una versión avanzada en la carpeta `/scanner-web` con:
- **Diseño Ultra-Moderno**: Interfaz Glassmorphism con animaciones de escaneo láser.
- **Historial Persistente**: Guarda tus escaneos localmente en el navegador.
- **Exportación**: Descarga tus resultados en formato CSV.
- **Feedback Premium**: Sonidos de escaneo y efectos visuales de celebración (confetti).
- **Gestión de Historial**: Copia al portapapeles o elimina escaneos individuales.

---

## 🛠️ Tecnologías Utilizadas

- **Backend/Script**: Python, OpenCV, PyZbar.
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript.
- **Librería de Escaneo Web**: [html5-qrcode](https://github.com/mebjas/html5-qrcode).
- **Diseño**: Google Fonts (Outfit), CSS Glassmorphism.

---

## 📂 Estructura del Proyecto

```text
.
├── codigo de barras.py  # Script principal en Python
├── index.html           # Página principal de la Web App
├── style.css            # Estilos modernos para la Web App
├── script.js            # Lógica de escaneo para la Web App
├── requirements.txt     # Dependencias de Python
└── README.md            # Documentación (este archivo)
```

---

## 🤝 Contribuciones

Las contribuciones son lo que hacen de la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

1. Haz un Fork del proyecto.
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`).
3. Haz un Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz un Push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

---

<p align="center">Creado con ❤️ por <a href="https://github.com/luismoratocanet28-dev">Luis Morato Canet</a></p>
