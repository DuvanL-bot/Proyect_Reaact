import type { Product } from "../services/types";

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setSuccess: (val: string) => void;
  setTitle: (val: string) => void;
  setPrice: (val: string) => void;
  setCategory: (val: string) => void;
  setError: (val: string) => void;
  title: string;      
  price: string;
  category: string;
}

export function CreateProducts({
  products, setProducts, setSuccess, setError,
  setTitle, setPrice, setCategory,
  title, price, category            
}: Props): void {

  if (!title || !price || !category) { setError("All fields are required"); return; }

  const newProduct: Product = {
    id_product: Date.now(),
    title_product:title,
    price_product: Number(price),
    category_details: category,
    thumbnail_product: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    description_product: "New product",
  };

  const updatedProducts = [newProduct, ...products];
  setProducts(updatedProducts);
  localStorage.setItem("products_backup", JSON.stringify(updatedProducts));

  setSuccess("Product created");
  setTitle("");
  setPrice("");
  setCategory("");
}