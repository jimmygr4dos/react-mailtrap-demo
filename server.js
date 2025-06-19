import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";  

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

// endpoint muy simple: POST /api/send
app.post("/api/send", async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    const info = await transporter.sendMail({
      from: '"Demo React" <demo@example.com>',
      to,
      subject,
      text
    });
    res.json({ ok: true, id: info.messageId });
  } catch (err) {
    res.status(500).json({ ok: false, message: "No se pudo enviar" });
  }
});

app.listen(4000, () => console.log("Servidor listo en http://localhost:4000"));
