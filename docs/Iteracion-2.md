# Iteración 2

Registro de lo pedido en la reunión con el contratista, lo que se implementó ahora, las respuestas a las dudas y el plan de lo que sigue.

## 1. Botón flotante de WhatsApp

**Pedido:** un logo flotante para que los clientes escriban más fácil.

**Qué se hizo:** se agregó un botón circular verde fijo abajo a la derecha (`src/components/WhatsAppButton.tsx`), visible en toda la página. Abre WhatsApp Web/app con un mensaje inicial.

**Pendiente del contratista:** el número real. Hoy `site.whatsapp` está vacío en `src/config.ts`. Hasta que se complete, el botón lleva a la sección de contacto para no mandar a un número inventado.

Cuando tengamos el número, cargarlo en formato internacional, solo dígitos. Ejemplo:

```ts
whatsapp: '5491112345678'
```

## 2. Redes sociales (LinkedIn e Instagram)

**Pedido:** sumar LinkedIn e Instagram.

**Qué se hizo:** iconos en el footer (`src/components/SocialLinks.tsx`), junto al mail y al enlace de contacto.

**Pendiente del contratista:** las URLs reales. Se cargan en el mismo archivo:

```ts
linkedin: 'https://www.linkedin.com/in/...',
instagram: 'https://www.instagram.com/...',
```

Mientras estén vacías, los iconos redirigen a `#contacto`.

## 3. Sección Blog

**Pedido:** una sección “Blog” para publicar escritos. Quedó para el final, para decidir cómo se carga el contenido.

**Qué se hizo en esta iteración:** nada en el código. No hay ruta, listado ni panel de carga.

**Plan (después de este mensaje):**

1. Definir si los posts los carga él solo (CMS) o los cargamos nosotros en el repo (archivos Markdown).
2. Definir si el blog es una página `/blog` + `/blog/slug` o un bloque más en la landing.
3. Recién ahí armar listado, detalle, y un flujo simple de publicación.

Hasta no cerrar eso, no conviene construir el blog: el modelo de datos cambia según la decisión.

## 4. Cambio de idioma (español / inglés)

**Pedido:** que el usuario pueda pasar la web entre español e inglés.

**Qué se hizo en esta iteración:** nada en la UI. El sitio sigue 100% en español.

**Plan:**

1. Armar un diccionario ES/EN para textos de navbar, secciones, formularios y popups.
2. Un toggle `ES | EN` en el header.
3. Guardar la preferencia en `localStorage`.
4. Traducir también el mensaje de WhatsApp y el `mailto`.

Es un cambio transversal: toca casi todos los componentes. Va después de cerrar WhatsApp/redes y las tarjetas, y antes o en paralelo al blog según prioridad del contratista.

## 5. Tarjetas Optimizamos / Transformamos / Ordenamos

**Pedido:** que se vean como la pieza original, juntas, pero que cada panel actúe por separado. Al pasar el mouse, un popup con descripción.

**Qué se hizo:** la sección usa de nuevo la imagen unida (`public/brand/pillars.jpg`). En desktop son tres zonas invisibles sobre la misma foto: visualmente es un solo recuadro, con las divisiones de la marca. Al hover o al foco aparece un overlay azul con el título y una descripción corta.

En celular la foto ancha no se lee bien, así que se muestran apiladas y la descripción se abre al toque.

Textos del popup:

- **Optimizamos:** detectar procesos ineficientes y cuellos de botella.
- **Transformamos:** involucrarse en el funcionamiento real y proponer soluciones concretas.
- **Ordenamos:** aclarar roles, comunicación y objetivos.

Si el contratista quiere otro copy, se edita en `src/content.ts`.

## 6. ¿Dónde se guardan los datos del formulario?

**Hoy no se guardan en ningún lado.** No hay base de datos, backend ni servicio de mails.

Al enviar, la página arma un `mailto:` a `hola@dehezasolutions.com` con nombre, email, empresa y mensaje. Eso **abre el cliente de correo del usuario** (Gmail, Outlook, Mail de Apple, etc.). El mensaje solo sale si esa persona aprieta enviar en su mail.

Implicancias:

- Nada queda guardado en el sitio ni en un servidor nuestro.
- Si el visitante no tiene mail configurado, el envío falla.
- No hay bandeja de entrada propia de la web ni aviso automático al contratista salvo que el visitante complete el envío.

**Opciones para más adelante (cuando se quiera que “llegue solo”):**

| Opción | Qué hace | Qué hay que decidir |
| --- | --- | --- |
| Formspree / Getform / Basin | El form pega a un servicio y llega un mail | Cuenta y destino |
| EmailJS | Igual, desde el frontend | Claves en el cliente |
| Netlify/Vercel Forms | Solo si se hostea ahí | Plataforma de deploy |
| Backend propio | Guarda en DB y manda mail | Más trabajo, más control |

Recomendación: un servicio tipo Formspree o el form nativo del host. El contratista recibe el mail sin que el visitante abra su Outlook.

El mail de destino se configura en `src/config.ts` (`site.email`).

---

## Qué quedó hecho en código

| Área | Estado | Archivos |
| --- | --- | --- |
| WhatsApp flotante | Hecho, falta número | `src/components/WhatsAppButton.tsx`, `src/config.ts` |
| LinkedIn / Instagram | Hecho, faltan URLs | `src/components/SocialLinks.tsx`, footer |
| Blog | Pendiente, a decidir | — |
| Idioma ES/EN | Pendiente | — |
| Tarjetas unidas + popup | Hecho | `src/sections/Pillars.tsx`, `src/content.ts` |
| Formulario | Explicado; sigue siendo `mailto` | `src/sections/Contact.tsx` |
| Config central | Hecho | `src/config.ts` |

## Plan después de este mensaje

Orden sugerido:

1. **Cargar datos reales** en `src/config.ts`: WhatsApp, LinkedIn, Instagram (y confirmar el mail).
2. **Revisar con el contratista** los textos del popup de las tres tarjetas.
3. **Idioma:** toggle ES/EN en todo el sitio.
4. **Formulario:** si quiere recibir consultas sin depender del mail del visitante, conectar Formspree (u otro) y dejar de usar `mailto`.
5. **Blog:** recién cuando se defina si publica él con un CMS o se suben Markdown al repo.

Datos que hay que pedirle al contratista para desbloquear 1 y 4:

- Número de WhatsApp (con código de país)
- URL de LinkedIn
- URL de Instagram
- Confirmación de `hola@dehezasolutions.com` o el mail real
- Si el blog lo va a escribir seguido (conviene CMS) o cada tanto (alcanza Markdown)
