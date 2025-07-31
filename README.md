# Embajadores Rapikom

Este proyecto es un landing page para embajadores de Rapikom, diseñado para captar aliados comerciales y ofrecer información sobre los beneficios de afiliarse a Rapikom.

## Tecnologías Utilizadas
- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Material-UI

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/angelmonzant/Embajadores-Diaz.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto
- `pages/index.tsx`: Página principal del landing page.
- `components/SignupForm.tsx`: Componente de formulario de registro.
- `lib/supabase.ts`: Configuración del cliente de Supabase.
- `tailwind.config.js`: Configuración de Tailwind CSS.
- `styles/globals.css`: Estilos globales.

## Despliegue

Para desplegar el proyecto, utiliza plataformas como Vercel o Netlify. Asegúrate de configurar las variables de entorno en el panel de configuración de la plataforma.

## Contribución

Si deseas contribuir, por favor abre un issue o envía un pull request con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.
