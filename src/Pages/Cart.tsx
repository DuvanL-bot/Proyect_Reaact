//Imports
import { useEffect } from "react";
import type { Product } from "../services/types";
import style from "../App.module.css";
import { NavigationBar } from "../components/navigationBar";

//types
type Props = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

//Funciont get local stores Cart
export  function Cart({ cart, setCart }: Props) {
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

//Function Remove and Update Product Cart 
  function removeFromCart(id_product: number) {
    const updated = cart.filter((p) => p.id_product !== id_product);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const total = cart.reduce(
    (sum, product) => sum + Number(product.price_product),
    0,
  );

  if (cart.length === 0)
    return (
  <div>
      <NavigationBar />
      <div style={{ padding: "20px" }}>
        <h1>Carrito</h1>
        <p>No hay productos en el carrito.</p>
      </div>
      </div>
    );

  return (
    //Style Cart
    <div>
      <NavigationBar/>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className={style.title}>Cart</h1>
          <span className={style.count}>{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <p className={style.emptyState}>No hay productos en el carrito.</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <div
                key={`${product.id_product}-${index}`}
                className={style.item}
              >
                <img
                  src={product.thumbnail_product}
                  alt={product.title_product}
                  className={style.itemImage}
                />
                <div>
                  <p className={style.itemTitle}>{product.title_product}</p>
                  <p className={style.itemCategory}>
                    {product.category_details}
                  </p>
                </div>
                <div>
                  <p className={style.itemPrice}>${product.price_product}</p>
                  <button
                    onClick={() => removeFromCart(product.id_product)}
                    className={style.itemRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className={style.footer}>
              <div className={style.summary}>
                <div className={style.summaryRow}>
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className={style.summaryRow}>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className={style.summaryTotal}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className={style.btnCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
