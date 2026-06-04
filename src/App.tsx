import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Favorites } from "./Pages/favorites";
import { Products } from "./Pages/products";
import { ForgetPassword } from "./Pages/ForgetPassword";
import { useState } from "react";
import type { Product } from "./services/types";
import { Register } from "./Pages/register";
import { ProtectedRoute } from "./components/ProtectedRouter";
import {Changespassword}  from "./Pages/changes-Password";
import { Login } from "./Pages/login";

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/Products"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ForgetPassword"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <ForgetPassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/changes-password" element={<Changespassword/>} /> 

        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Cart cart={cart} setCart={setCart} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Favorites like={like} setlike={setlike} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Home"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
