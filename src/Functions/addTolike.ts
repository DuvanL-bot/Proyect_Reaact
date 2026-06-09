//imports
import type { Product } from "../services/types";
import {keepFavPost} from"../services/addPagesFavCar";

//types
type AddTolikeProps = {
  product: Product;
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

//function save information obtained from local stores
export async function addTolike({product,like,setlike}: AddTolikeProps) {
  try{
  await keepFavPost(product);
  const updatedlike = [...like, product];
  setlike(updatedlike);

  } catch (error) {
    console.error("Error al agregar a favoritos:", error);
  }
}

