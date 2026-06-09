//import
import type { Product } from "../services/types";
import { keepCartPost } from "../services/addPagesFavCar";

//types
type AddToCartProps = {
  product: Product;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

//function save information obtained from local stores
export async function addToCart({ product, cart, setCart }: AddToCartProps) {
  try {
    await keepCartPost(product);
    const updatedCart = [...cart, product];

    setCart(updatedCart);
  } catch (error) {
    console.error( error);
  }
}
