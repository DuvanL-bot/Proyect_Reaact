import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import { Favorites } from "../Pages/favorites";
import { Products} from "../Pages/products";
import type { Product } from "../services/types";
import { useState } from "react";
import style from "../App.module.css";

export function Pages() {
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/favorites"
          element={<Favorites like={like} setlike={setlike} />}
        />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}

export function NavigationBar() {
  return (
    <>
<header className={style.headerContainer}>
      {/* Fila Superior: Logo, Barra de búsqueda y Accesos directos */}
      <div className={style.topBar}>
        <Link to="/products" className={style.brandLogo}>
          MI<span>SHOP</span>
        </Link>
        
        <div className={style.quickActions}>
          <Link to="/favorites" className={style.actionLinkItem}>
            <span className={style.actionIcon}>❤️</span>
            <span className={style.actionText}>Favoritos</span>
          </Link>
          <Link to="/cart" className={style.actionLinkItem}>
            <span className={style.actionIcon}>🛒</span>
            <span className={style.actionText}>Carrito</span>
          </Link>
        </div>
      </div>

      {/* Fila Inferior: Enlaces de Navegación Horizontales */}
      <nav className={style.bottomNav}>
        <ul className={style.horizontalNavList}>
          <li className={style.horizontalNavItem}>
            <Link className={style.navMenuLink} to="/products">
              Productos
            </Link>
          </li>
          <li className={style.horizontalNavItem}>
            <Link className={style.navMenuLink} to="/favorites">
              Favoritos
            </Link>
          </li>
          <li className={style.horizontalNavItem}>
            <Link className={style.navMenuLink} to="/cart">
              Mi Carrito
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
