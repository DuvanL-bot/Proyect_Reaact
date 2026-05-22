import style from "../App.module.css";

export function Register() {
  return (
      <div>
        <h2>Register</h2>
        <div className={style.formularioregistre}>
          <form className={style.fromregistre}>
            <label className={style.labelregistre} htmlFor="name">Name: </label>
            <input className={style.inputregistre} type="text" name="name" required />
            <br />
            <label className={style.labelregistre} htmlFor="email">Email: </label>
            <input className={style.inputregistre} type="email" name="email" required />
            <br />
            <label className={style.labelregistre} htmlFor="pasword">Pasword: </label>
            <input className={style.inputregistre} type="pasword" name="pasword" required />
            <br />
            <button className={style.buttonregistre} type="submit">seend</button>
          </form>
        </div>
      </div>
  );
}
