import type { Product } from "../services/types";

type AddToCartProps = {
  product: Product;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

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