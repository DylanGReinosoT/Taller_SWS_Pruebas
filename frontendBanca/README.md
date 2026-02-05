# Sistema Bancario - Frontend

![Bienvenido al Sistema Bancario](./public/screenshot.png)

## 📋 Descripción

Frontend desarrollado en **React + Vite** para un sistema de gestión bancaria seguro y eficiente. Permite la creación y administración de socios y cuentas bancarias con una interfaz moderna y responsiva.

## ✨ Características Principales

✓ **Gestión completa de socios** - Registro y administración de socios del sistema  
✓ **Creación y administración de cuentas** - Abrir nuevas cuentas bancarias  
✓ **Validación de datos en tiempo real** - Feedback inmediato al usuario  
✓ **Interfaz segura y amigable** - Diseño intuitivo y accesible  
✓ **Integración con API bancaria** - Comunicación segura con el backend  

## 🚀 Requisitos Previos

- **Node.js** (v14 o superior)
- **npm** o **yarn**

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/front-banca.git
cd front-banca
```

2. **Instalar dependencias**
```bash
npm install
```

## 🏃 Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
front-banca/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Página principal
│   │   ├── CrearSocio.jsx        # Formulario de creación de socios
│   │   └── CuentaPage.jsx        # Gestión de cuentas
│   ├── services/
│   │   ├── socios.service.js     # Llamadas API para socios
│   │   └── cuentas.service.js    # Llamadas API para cuentas
│   ├── styles/
│   │   ├── Home.css
│   │   ├── CrearSocio.css
│   │   └── CuentaPage.css
│   ├── App.jsx                   # Componente principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/                       # Archivos estáticos
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🔧 Configuración de Entorno

Crea un archivo `.env` en la raíz del proyecto (opcional):

```env
VITE_API_URL=http://localhost:8000/api
```

## 🎨 Tecnologías Utilizadas

- **React 18+** - Librería de interfaz de usuario
- **Vite** - Herramienta de compilación rápida
- **CSS3** - Estilos personalizados con animaciones
- **ESLint** - Linter para calidad de código

## 📱 Funcionalidades

### Página Principal (Home)
- Bienvenida con descripción del sistema
- Navegación a secciones principales
- Información sobre características

### Crear Socio
- Formulario para registrar nuevos socios
- Validación de datos personales
- Integración con API de socios

### Crear Cuenta
- Formulario para abrir cuentas bancarias
- Selección de socios existentes
- Configuración de parámetros de cuenta

## 🔒 Seguridad

Este proyecto implementa:
- Validación de datos en frontend
- HTTPS para comunicaciones (en producción)
- Sanitización de inputs
- Protección CSRF (mediante API)

## 🐛 Reportar Problemas

Si encuentras un bug, por favor abre un [issue](https://github.com/tu-usuario/front-banca/issues/new) con:
- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Capturas de pantalla (si aplica)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 📧 Contacto

- **Autor:** [Tu Nombre]
- **Email:** tu.email@ejemplo.com
- **Proyecto:** Sistema Bancario - Control de Lectura Unidad 3

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Guía de ESLint](https://eslint.org)

---

**Nota:** Este es un proyecto educativo desarrollado como parte del curso de Desarrollo de Software Seguro.
