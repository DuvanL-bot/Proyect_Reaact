import style from "../App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export function Changespassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [cargando, setCargando] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

const params = new URLSearchParams(location.search);
  const resetToken = params.get("token") || "";

  useEffect(() => {
    if (!resetToken) {
      alert("Reset Token not Found");
    }
  }, [resetToken]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensajeExito("");
    setMensajeError("");

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    if (!resetToken) {
      setMensajeError("");
      return;
    }

      setCargando(true);

  try {
         await axios.post(
      "http://localhost:3006/auth/reset-password",
      {
        token: resetToken,
        newPassword: password,
      },
    );

    setMensajeExito("¡Contraseña actualizada con éxito!");

    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      navigate("/");
    }, 300000);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data?.error) {
      setMensajeError(error.response.data.error);
    } else {
      setMensajeError("Ocurrió un error al actualizar la contraseña.");
    }
  } finally {
    setCargando(false);
  }

  };



  return (
    <div className={style.formularioregistre}>
      <form onSubmit={handleSubmit} className={style.fromregistre}>
        <h2 className={style.tituloregistre}>Changes Password</h2>
        <div className={style.passwordWrapper}>
          <input
            className={style.inputregistre}
            type={showPassword ? "text" : "password"}
            name="New password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            disabled={cargando}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={style.eyeButton}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 5c-1.84 0-3.35.39-4.62.97L3.7 2.29 2.29 3.7l3.32 3.32C3 8.97 2.07 11.64 2.05 11.68c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68 1.84 0 3.35-.39 4.62-.97l3.68 3.68 1.41-1.41-3.32-3.32c2.61-1.95 3.54-4.62 3.56-4.66.07-.21.07-.43 0-.63C21.93 11.61 19.63 5 12 5m-7.93 7c.1-.24.27-.59.52-.99l5.87 5.87c-4.21-.65-5.94-3.84-6.39-4.88m9.25 4.91L5.84 9.43c.34-.34.74-.67 1.19-.98l8.05 8.05c-.53.19-1.12.33-1.76.41m3.65-1.35-1.53-1.53c.61-1.03.71-2.28.31-3.38-.18.21-.45.36-.75.36-.55 0-1-.45-1-1 0-.44.29-.81.69-.94a3.98 3.98 0 0 0-4.71-.5L8.92 7.51c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.17 2.34-2.96 3.56Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
                <path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
              </svg>
            )}
          </button>
        </div>

        <div className={style.passwordWrapper}>
          <input
            className={style.inputregistre}
            type={showPassword ? "text" : "password"}
            name="Password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            disabled={cargando}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={style.eyeButton}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 5c-1.84 0-3.35.39-4.62.97L3.7 2.29 2.29 3.7l3.32 3.32C3 8.97 2.07 11.64 2.05 11.68c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68 1.84 0 3.35-.39 4.62-.97l3.68 3.68 1.41-1.41-3.32-3.32c2.61-1.95 3.54-4.62 3.56-4.66.07-.21.07-.43 0-.63C21.93 11.61 19.63 5 12 5m-7.93 7c.1-.24.27-.59.52-.99l5.87 5.87c-4.21-.65-5.94-3.84-6.39-4.88m9.25 4.91L5.84 9.43c.34-.34.74-.67 1.19-.98l8.05 8.05c-.53.19-1.12.33-1.76.41m3.65-1.35-1.53-1.53c.61-1.03.71-2.28.31-3.38-.18.21-.45.36-.75.36-.55 0-1-.45-1-1 0-.44.29-.81.69-.94a3.98 3.98 0 0 0-4.71-.5L8.92 7.51c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.17 2.34-2.96 3.56Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
                <path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
              </svg>
            )}
          </button>
        </div>

        <button
          className={style.buttonregistre}
          type="submit"
          disabled={cargando}
        >
          {cargando ? "Updating..." : "Confirm"}
        </button>
        <p className={style.error}>{mensajeExito}</p>
        <p className={style.success}>{mensajeError}</p>
      </form>
    </div>
  );
}
