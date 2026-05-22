import { Home } from "./Pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cart from "./Pages/Cart";
import { Favorites } from "./Pages/favorites";
import { ProductsId } from "./Pages/productsId";
import { useState } from "react";
import type { Product } from "./services/types";
import { Register } from "./Pages/register";
import { Login } from "./Pages/login";

type User = {
  id: number;
  name: string;
  role: string
};

export default function App() {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    return token ? { id: 1, name: "Usuario", role: role || "user" } : null;
  });
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);
  

  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {user ? (
        <button onClick={logout}>Logout ({user.role})</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/favorites" element={<Favorites like={like} setlike={setlike} />} />
        <Route path="/productsId" element={<ProductsId />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
