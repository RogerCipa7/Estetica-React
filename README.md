# ✨ GlowBook - Centro de Estética & Gestión de Citas

GlowBook es una plataforma premium diseñada para centros de estética que combina una experiencia de usuario sofisticada con una potente herramienta administrativa. Permite a los clientes reservar servicios en línea y a los administradores gestionar el negocio con datos en tiempo real.

![GlowBook Preview](https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200&h=400)

## 🚀 Características Principales

### Para Clientes
- **✨ Interfaz Premium**: Diseño moderno con efectos de vidrio (glassmorphism) y tipografía elegante.
- **📅 Reservas Inteligentes**: Selección de múltiples servicios, validación automática de horarios disponibles y confirmación instantánea.
- **💄 Catálogo de Servicios**: Navegación por categorías con detalles de precios, duración y descripción.
- **📱 100% Responsivo**: Experiencia fluida tanto en dispositivos móviles como en computadoras.

### Para Administradores
- **📊 Dashboard de Analíticas**: Visualización de ingresos estimados, total de citas y tasas de cancelación.
- **🔐 Gestión de Citas**: Panel completo para monitorear, confirmar o cancelar reservas.
- **🔑 Acceso Seguro**: Sistema de autenticación con protección de rutas y sesión local.

## 🛠️ Stack Tecnológico

- **Core**: [React.ts](https://reactjs.org/) (Vite)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Base de Datos**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)

## 📂 Estructura del Proyecto

```text
src/
├── components/   # Componentes de layout (Header, Footer)
├── data/         # Datos estáticos (Catálogo de servicios)
├── pages/        # Páginas principales (Home, Admin, Login, Contacto)
├── sections/     # Secciones modulares de las páginas
├── utils/        # Utilidades (Cliente Supabase, Lógica de reservas)
└── App.tsx       # Configuración de rutas
```

## ⚙️ Configuración y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/usuario/glowbook.git
   cd glowbook
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Variables de Entorno**:
   Crea un archivo `.env` en la raíz con tus credenciales de Supabase:
   ```env
   VITE_SUPABASE_URL=tu_url_de_supabase
   VITE_SUPABASE_ANON_KEY=tu_anon_key
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

## 🗄️ Base de Datos

El proyecto utiliza dos tablas principales en Supabase:
- `bookings`: Información del cliente y metadatos de la cita.
- `booking_services`: Relación de servicios asociados a cada cita.

---
Desarrollado con ❤️ para centros de estética que buscan brillar.
