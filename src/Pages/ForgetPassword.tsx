import style from "../App.module.css";

export function ForgetPassword() {
  return (
    <div className={style.formularioregistre}>
      <form className={style.fromregistre}>
        <h2 className={style.tituloregistre}>Enter your email</h2>
        <input
          className={style.inputregistre}
          type="email"
          placeholder="Email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={style.buttonregistre} >verify</button>
      </form>
    </div>
  );
}
