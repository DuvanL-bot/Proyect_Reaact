import { useState, useEffect } from "react";
import style from "../App.module.css";

export function DarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("app-theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={style.themeBtn} onClick={toggleTheme} title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      {theme === "dark" ? (
        /* Sol — estás en dark, puedes volver a light */
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007S17.01 14.761 17.01 12s-2.246-5.007-5.008-5.007S6.995 9.239 6.995 12z" />
          <path d="M11 1h2v4h-2zM11 19h2v4h-2zM1 11h4v2H1zM19 11h4v2h-4zM4.222 5.636l1.414-1.414 2.828 2.828-1.414 1.414zM15.536 16.95l1.414-1.414 2.828 2.828-1.414 1.414zM4.222 18.364l2.828-2.828 1.414 1.414-2.828 2.828zM15.536 7.05l2.828-2.828 1.414 1.414-2.828 2.828z" />
        </svg>
      ) : (
        /* Luna — estás en light, puedes ir a dark */
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.742 13.045a8.088 8.088 0 0 1-8.088-8.088c0-1.167.245-2.276.671-3.291a.5.5 0 0 0-.632-.66A10.005 10.005 0 1 0 23 11.307a.5.5 0 0 0-.66-.632 8.015 8.015 0 0 1-1.598.37z" />
        </svg>
      )}
    </button>
  );
}