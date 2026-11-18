# Deheza Solutions

Sitio web de **Deheza Solutions**, consultora que analiza el funcionamiento real de las empresas para optimizar procesos, ordenar equipos y medir resultados.

Es una landing en español (una sola página) con:

- Hero y propuesta de valor
- Enfoque: *optimizamos / transformamos / ordenamos*
- Diagnóstico y servicios
- Cómo trabajamos
- Formulario de contacto (abre el cliente de mail)

Stack: **React**, **TypeScript**, **Vite** y **Tailwind CSS**.

## Requisitos

- Node.js 20 o superior
- npm

## Cómo correrla en local

```bash
npm install
npm run dev
```

Después abrí [http://localhost:5173](http://localhost:5173) en el navegador.

## Otros comandos

```bash
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve el build localmente
npm run lint     # corre el linter
```

## Contacto

El formulario envía un `mailto` a `hola@dehezasolutions.com`. Si ese mail cambia, hay que actualizarlo en `src/sections/Contact.tsx`.
