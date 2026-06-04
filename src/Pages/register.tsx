//import
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../App.module.css";

const API_URL = "http://localhost:3006";

export function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Error al registrar");

      setSuccess("Usuario creado correctamente");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setError("Error al registrar, intenta de nuevo");
    }
  }

  return (
    <div>
      <div className={style.formularioregistre}>
        <button className={style.buttonlogin}
        type="button"
        onClick={()=>navigate("/")}>
          Login
        </button>
        <form className={style.fromregistre} onSubmit={handleRegister}>
          <h2 className={style.tituloregistre}>Register</h2>
          <label className={style.labelregistre} htmlFor="name">
            Name:{" "}
          </label>
          <input
            className={style.inputregistre}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px" }}
            required
          />
          <br />
          <label className={style.labelregistre} htmlFor="email">
            Email:{" "}
          </label>
          <input
            className={style.inputregistre}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px" }}
            required
          />
          <br />
          <label className={style.labelregistre} htmlFor="pasword">
            Pasword:{" "}
          </label>
          <input
            className={style.inputregistre}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className={style.buttonregistre} type="submit">
            seend
          </button>
          {error && <p className={style.error}>{error}</p>}
          {success && <p className={style.success}>{success}</p>}
        </form>
      </div>
    </div>
  );
}
