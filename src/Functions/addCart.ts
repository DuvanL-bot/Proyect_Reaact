//import
import type { Product } from "../services/types";

//types
type AddToCartProps = {
  product: Product;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

//function save information obtained from local stores
export  function addToCart({
  product,
  cart,
  setCart
}: AddToCartProps) {

  const updatedCart = [...cart, product];

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
}