//Imports
import { useEffect } from "react";
import type { Product } from "../services/types";
import style from "../App.module.css";
import { NavigationBar } from "../components/navigationBar";
import {keepCartProduct,keepCartdelete}from "../services/addPagesFavCar"

//types
type Props = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};
//Funciont get local stores 
export  function Cart({ cart, setCart }: Props) {
 useEffect(() => {
    keepCartProduct()
      .then(setCart)
      .catch((err) => console.error("Error al cargar carrito:", err));
  }, [setCart]);

//Function Remove and Update Product Cart 
  async function Cartdelete(id_product: number) {
    try {
      await keepCartdelete(id_product);
      const updated = cart.filter((p) => p.id_product !== id_product);
      setCart(updated);
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    }
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
      <div className={style.containerCart}>
        <div className={style.headerCart}>
          <h1 className={style.titleCart}>Cart</h1>
          <span className={style.countCart}>{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <p className={style.emptyStateCart}>No hay productos en el carrito.</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <div
                key={`${product.id_product}-${index}`}
                className={style.itemCart}
              >
                <img
                  src={product.thumbnail_product}
                  alt={product.title_product}
                  className={style.itemImageCart}
                />
                <div>
                  <p className={style.itemTitleCart}>{product.title_product}</p>
                  <p className={style.itemCategoryCart}>
                    {product.category_details}
                  </p>
                </div>
                <div>
                  <p className={style.itemPriceCart}>${product.price_product}</p>
                  <button
                    onClick={() => Cartdelete(product.id_product)}
                    className={style.itemRemoveCart}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className={style.footerCart}>
              <div className={style.summaryCart}>
                <div className={style.summaryRowCart}>
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className={style.summaryRowCart}>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className={style.summaryTotalCart}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className={style.btnCheckoutCart}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
