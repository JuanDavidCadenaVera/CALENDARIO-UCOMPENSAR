import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Crear instancia de Resend
if (!process.env.RESEND_API_KEY) {
  console.error("❌ Falta RESEND_API_KEY en el .env");
  process.exit(1);
}
const resend = new Resend(process.env.RESEND_API_KEY);

// Ruta para enviar email
app.post("/enviar-email", async (req, res) => {
  const { emailTo, asunto, html } = req.body;

  if (!emailTo || !asunto || !html) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // 👈 correo verificado
      to: [emailTo],
      subject: asunto,
      html: html,
    });

    if (error) {
      console.error("❌ Error al enviar:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    console.log("✅ Correo enviado a", emailTo);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
