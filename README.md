# Landing de Brisa Lachermeier

Sitio estático, sin frameworks ni compilación. Se abre, se edita y se publica tal cual.

---

## Paso 1. Instalar lo necesario

**VS Code**: descargalo de `code.visualstudio.com`. Instalador normal, siguiente y
siguiente.

**Live Server**: es la extensión que te muestra los cambios en el navegador apenas
guardás, sin tener que refrescar a mano. En VS Code, ícono de extensiones en la
barra lateral (o `Ctrl+Shift+X`), buscá "Live Server" de Ritwick Dey, Instalar.

Este proyecto ya trae un archivo `.vscode/extensions.json`, así que al abrir la
carpeta VS Code te va a ofrecer instalarla solo. Decile que sí.

**Prettier** (opcional): formatea el código con `Ctrl+S`. Mismo procedimiento,
buscá "Prettier - Code formatter". Ya está configurado en `.vscode/settings.json`
para que se aplique al guardar.

---

## Paso 2. Abrir el proyecto

Descomprimí la carpeta donde vayas a trabajar. Un lugar razonable:
`C:\Users\TuUsuario\Documentos\brisa-landing`.

En VS Code: **Archivo → Abrir carpeta**, y elegí `brisa-landing`. Importante abrir
la **carpeta**, no el archivo suelto: si abrís solo el `index.html`, Live Server y
Git no funcionan bien.

---

## Paso 3. Entender qué hay en cada archivo

```
brisa-landing/
├── index.html                  Contenido y estructura
├── css/styles.css              Todos los estilos
├── js/main.js                  Animación del gráfico y eventos de GA4
├── img/
│   ├── foto.webp               Foto (formato liviano, la usan los navegadores modernos)
│   ├── foto.jpg                Respaldo para navegadores viejos
│   ├── og-image.jpg            Imagen que aparece al compartir el link
│   └── favicon.svg             Ícono de la pestaña
├── CV_Brisa_Lachermeier.pdf    Lo que descarga el botón
├── .vscode/                    Config del editor, no se toca
└── .gitignore                  Qué archivos ignora Git
```

Antes estaba todo en un solo archivo. Lo separé porque es más cómodo de editar:
cuando busques un color vas directo al CSS, y no tenés que navegar 500 líneas de
HTML para encontrarlo.

**El HTML por dentro**, de arriba hacia abajo:

- `<head>`: título, descripción, metas para compartir en redes, favicon.
- `<header class="top">`: barra de navegación y hero (nombre, foto, botones).
- `<section id="caso">`: el caso de IMACO en cinco etapas.
- `<section id="proyectos">`: Coffee Co.
- `<section id="capacidades">`: la tabla de competencias.
- `<section id="contacto">`: mail, WhatsApp, LinkedIn y descarga del CV.
- Al final: el bloque de GA4 comentado y el JSON-LD.

---

## Paso 4. Ver la página mientras la editás

Clic derecho sobre `index.html` en el panel izquierdo → **Open with Live Server**.
Se abre el navegador en `http://127.0.0.1:5500`.

Probá: cambiá cualquier texto del `index.html`, guardá con `Ctrl+S`, y mirá el
navegador. Se actualiza solo.

Para trabajar cómoda, poné VS Code y el navegador lado a lado: tecla Windows +
flecha izquierda en uno, flecha derecha en el otro.

---

## Paso 5. Los cambios que más vas a hacer

**Cambiar un texto**: buscalo en `index.html` con `Ctrl+F`, editalo, guardá.

**Cambiar los colores**: están todos arriba de `css/styles.css`, en `:root`.

```css
--navy: #10233F;   /* fondos oscuros */
--teal: #1F7A8C;   /* acentos y barras "después" */
--sky:  #8FD3E0;   /* acentos sobre fondo oscuro */
```

Cambiás ahí y se actualiza toda la página. No busques los colores en otro lado,
no están repetidos.

**Actualizar los números del gráfico**: ojo, están en **dos lugares** dentro de
`index.html`, y tienen que coincidir.

1. En el bloque `<div id="chart">`, cada barra tiene un ancho en `--w`, que es el
   porcentaje que ocupa respecto del valor más alto de todo el gráfico (1.742).
   Por ejemplo, 1.286 sobre 1.742 da 73,8%.
2. En la `<table>` de abajo, que es la versión que leen los lectores de pantalla.

Si cambiás una y no la otra, la página le muestra un dato distinto a cada persona.

**Cambiar la foto**: reemplazá `img/foto.jpg` manteniendo el nombre. Que sea
cuadrada y de 520 píxeles de lado. Si no generás la versión `.webp`, borrá la
línea `<source srcset="img/foto.webp" ...>` del `index.html` o va a seguir
buscando un archivo que no existe.

---

## Paso 6. Cuando algo no se ve bien

`F12` en el navegador abre las herramientas de desarrollo.

- La pestaña **Console** te muestra los errores de JavaScript.
- El ícono de celular arriba a la izquierda simula pantallas chicas. Probá siempre
  en 390 píxeles de ancho, que es un celular típico: la mayoría de los reclutadores
  te va a abrir desde ahí.
- Clic derecho sobre cualquier elemento → **Inspeccionar** te muestra qué regla de
  CSS lo está afectando y en qué línea.

---

## Paso 7. Subirlo a GitHub

Necesitás Git instalado (`git-scm.com`) y una cuenta en GitHub.

La primera vez, configurá tu identidad. Terminal en VS Code con
``Ctrl+` `` y escribí:

```bash
git config --global user.name "Brisa Lachermeier"
git config --global user.email "brisa.lacher01@gmail.com"
```
<!-- -->
Después, desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primera versión de la landing"
```

En GitHub, botón **New repository**, nombre `brisa-landing`, público, y **sin**
tildar nada de README ni .gitignore (ya los tenés). Te va a mostrar unos comandos;
usá estos:

```bash
git remote add origin https://github.com/TU-USUARIO/brisa-landing.git
git branch -M main
git push -u origin main
```

De ahí en adelante, cada vez que cambies algo:

```bash
git add .
git commit -m "Describí acá qué cambiaste"
git push
```

También podés hacerlo desde el panel de Git de VS Code, el tercer ícono de la barra
lateral, sin escribir comandos.

---

## Paso 8. Publicarlo

**Cloudflare Pages** es gratis y no requiere tarjeta.

1. Entrá a `dash.cloudflare.com`, creá la cuenta.
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Autorizá GitHub y elegí `brisa-landing`.
4. En la configuración de build **no pongas nada**: ni comando ni carpeta de
   salida. Es HTML estático, se sirve tal cual.
5. **Save and Deploy**.

En un minuto tenés la página en `brisa-landing.pages.dev`. Cada `git push`
publica los cambios solo.

Cuando compres el dominio, se conecta desde **Custom domains** en el mismo panel.

---

## Antes de publicar

- [ ] Reemplazar `brisalacher.com` por tu dominio real en las cinco URL absolutas
      del `<head>`: `canonical`, `og:url`, `og:image`, `twitter:image`, y el `url`
      e `image` del JSON-LD al final del archivo. Tienen que ser absolutas o la
      previsualización al compartir no funciona.
- [ ] Poner el ID de GA4 y descomentar el bloque del final. Los eventos
      `cv_download`, `email_click`, `whatsapp_click` y `linkedin_click` ya están
      conectados y se disparan solos.
- [ ] Abrir la página en el celular y revisarla entera.
- [ ] Probar los cuatro botones de contacto.
- [ ] Pasar el link por `cards-dev.twitter.com/validator` o mandártelo por WhatsApp
      para confirmar que la previsualización sale bien.

---

## Si querés seguir aprendiendo con esto

El proyecto es chico a propósito, así que sirve para practicar sin romper nada.
Tres cosas que podrías agregar y que además le suman a la página:

1. **El dashboard de Looker Studio** embebido en la sección de proyectos, con un
   `<iframe>`.
2. **Un formulario de contacto** con Formspree, que es gratis y no necesita
   servidor. Reemplazaría al `mailto:` y te daría un evento medible más.
3. **Una subpágina** `/auditoria.html` con la auditoría del e-commerce, reusando
   el mismo `styles.css`.
