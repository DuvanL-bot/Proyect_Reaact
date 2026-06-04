//imports
import type { Product } from "../services/types";

//types
type AddTolikeProps = {
  product: Product;
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

//function save information obtained from local stores
export function addTolike({
  product,
  like,
  setlike
}: AddTolikeProps) {

  const updatedlike = [...like, product];

  setlike(updatedlike);

  localStorage.setItem(
    "like",
    JSON.stringify(updatedlike)
  );
}

