import { useState } from "react";
import style from "../App.module.css";
import axios from "axios";

export function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [cargando, setCargando] = useState(false);

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setMensajeExito("");
    setMensajeError("");
    setCargando(true);

    try {
      const response = await axios.post(
        "http://localhost:3006/auth/ForgetPassword",
        { email },
      );

      setMensajeExito(
        response.data.message || "Correo de recuperación enviado con éxito.",
      );
      setEmail("");
    } catch (error) {
      if (axios.isAxiosError(error)
       ) {
        setMensajeError(error+"error");
      } else {
        setMensajeError("Hubo un error al intentar conectar con el servidor.");
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className={style.formularioregistre}>
      <form onSubmit={handleSubmit} className={style.fromregistre}>
        <h2 className={style.tituloregistre}>Enter your email</h2>
        <input
          className={style.inputregistre}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={cargando}
        />
        <button
          type="submit"
          className={style.buttonregistre}
          disabled={cargando}
        >
          verify
        </button>
        <p className={style.success}>{mensajeExito}</p>
        <p className={style.error}>{mensajeError}</p>
      </form>
    </div>
  );
}
