import type { Product } from "../services/types";

type AddTolikeProps = {
  product: Product;
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

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

