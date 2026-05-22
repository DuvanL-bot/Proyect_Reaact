import { NavigationBar } from "../components/navigationBar";
import { useEffect } from "react";
import type { Product } from "../services/types";

type Props = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export default function Cart({ cart, setCart }: Props) {
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  function removeFromCart(id_product: number) {
    const updated = cart.filter((p) => p.id_product !== id_product);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const total = cart.reduce((sum, product) => sum + product.price_product, 0);

  if (cart.length === 0)
    return (
      <div style={{ padding: "20px" }}>
        <h1>Carrito</h1>
        <p>No hay productos en el carrito.</p>
      </div>
    );

  return (
    <div>
      <NavigationBar />
      <h1>🛒 Cart</h1>

      <div style={{ padding: "20px" }}>
        <h1>Carrito</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((product, index) => (
            <li
              key={`${product.id_product}-${index}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px sol #ddd",
              }}
            >
              <span>{product.title_product}</span>
              <span>${product.price_product}</span>
              <button
                onClick={() => removeFromCart(product.id_product)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: "20px" }}>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
