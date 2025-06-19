
# React + Mailtrap Demo

Proyecto didáctico **todo-en-uno** (React + API Express + Nodemailer) para que practiques el envío de correos usando Mailtrap sin salir de tu primer repositorio React.

---

## 1 · Requisitos

* **Node 18 +**  
* **npm** (se instala con Node)  
* Cuenta gratis en [mailtrap.io](https://mailtrap.io/) – ya tenemos credenciales de sandbox.

---

## 2 · Clonar e instalar

```bash
git clone <URL-de-tu-repositorio> react-mailtrap-demo
cd react-mailtrap-demo
npm install
```

---

## 3 · Configurar variables de entorno  ⬅️ **PASO CLAVE**

Crea un archivo **`.env`** en la raíz del proyecto y copia:

```
# .env  (no lo subas jamás al repositorio)
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525         # 25, 465, 587 o 2525. 2525 recomendado
SMTP_USER=<TU_USER>
SMTP_PASS=<TU_PASSWORD>
```

> ⚠️ Si cambias tu inbox en Mailtrap, recuerda actualizar `SMTP_USER` y `SMTP_PASS`.

---

## 4 · Levantar el proyecto

```bash
npm run dev
```

* **React (Vite)** escucha en <http://localhost:5173>  
* **API Express** escucha en <http://localhost:4000/api/send>

Ambos procesos arrancan juntos gracias a **concurrently**.

---

## 5 · Enviar tu primer e-mail

1. Abre `http://localhost:5173`.  
2. Completa **Destinatario**, **Asunto** y **Mensaje**.  
3. Pulsa **Enviar**.  
4. Verás el resultado en tu **Inbox virtual** de Mailtrap.

---

## 6 · Estructura de carpetas

```
react-mailtrap-demo/
├─ .env              # credenciales SMTP
├─ package.json      # dependencias + scripts
├─ server.js         # micro-API Express + Nodemailer
├─ vite.config.js    # proxy opcional (ya configurado)
└─ src/
   ├─ App.jsx
   ├─ EmailForm.jsx  # formulario React con fetch a /api/send
   ├─ index.css
   └─ main.jsx
```

---

## 7 · Solución de CORS (ya aplicada)

El backend incluye `cors()` para permitir llamadas desde `http://localhost:5173`.  
Si cambias el puerto del front, actualiza la línea:

```js
app.use(cors({ origin: "http://localhost:5173" }));
```

---

## 8 · Notas útiles

* **TLS / STARTTLS**: Nodemailer negocia TLS automáticamente en el puerto 2525.  
* **Producción**: Usa variables de entorno seguras (GitHub Secrets, Vercel env, etc.).  
* **Mailtrap Templates**: Puedes activar plantillas HTML dentro del dashboard si quieres enviar correos más elegantes.

¡Listo! Ya puedes integrar el envío de e-mails en tus proyectos React sin exponer credenciales ni complicarte con servidores externos.
