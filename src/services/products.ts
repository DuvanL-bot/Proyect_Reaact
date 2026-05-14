//Import Functions
import type { Product } from "./types";

//data type
interface LoadProductsArgs {
  setProducts: (data: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

//Function Get
async function loadProducts({ setProducts, setLoading, setError }: LoadProductsArgs) {
  try {
    setLoading(true); 
    const response = await fetch("https://dummyjson.com/products");//Api Rest
    if (!response.ok) throw new Error("Error loading products");

    const data = await response.json();
    setProducts(data.products);
    localStorage.setItem("products_backup", JSON.stringify(data.products));
  } catch (erro) {
    const backup = localStorage.getItem("products_backup");//local backup Storage
    if (backup) {
      setProducts(JSON.parse(backup));
    } else {
      setError(erro +"Error loading products");
    }
  } finally {
    setLoading(false);
  }
}

export default loadProducts;