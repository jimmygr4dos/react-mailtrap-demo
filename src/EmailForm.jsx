import { useState } from "react";

export default function EmailForm() {
  const [form, setForm] = useState({ to: "", subject: "", text: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Enviando…");
    try {
      const res = await fetch("http://localhost:4000/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data.ok ? "✅ Enviado" : "❌ Error");
    } catch {
      setStatus("❌ Error de red");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "2rem auto" }}>
      <input name="to" placeholder="Destinatario" onChange={handleChange} required />
      <input name="subject" placeholder="Asunto" onChange={handleChange} required />
      <textarea name="text" placeholder="Mensaje" rows="4" onChange={handleChange} required />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
}
