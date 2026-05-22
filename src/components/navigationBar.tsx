import { Link } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import { Favorites } from "../Pages/favorites";
import { ProductsId } from "../Pages/productsId";
import type { Product } from "../services/types";
import { Register } from "../Pages/register";
import { useState } from "react";

export function Pages() {
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);
  return (
    <>
      <Routes>
        <Route path="" element={<h1>Inicio</h1>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/favorites"
          element={<Favorites like={like} setlike={setlike} />}
        />
        <Route path="/productsId" element={<ProductsId />} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </>
  );
}

export function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/favorites">
                  favorites
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navbar-brand" to="/productsId">
                  ProductsId
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navbar-brand" to="/Register">
                Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
