//Backend
const API_URL = "http://localhost:3006/products";
//Import Functions
import type { Product } from "./types";

//data type
interface LoadProductsArgs {
  setProducts: (data: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

//Function Get
export async function loadProducts({
  setProducts,
  setLoading,
  setError,
}: LoadProductsArgs) {
  try {
    setLoading(true);
    const response = await fetch(`${API_URL}`); //Api Rest
    if (!response.ok) throw new Error("Error loading products");

    const data = await response.json();
    setProducts(data);
    // localStorage.setItem("products_backup", JSON.stringify(data.products));
  } catch (erro) {
    setError("Error loading productos" + erro);
  } finally {
    setLoading(false);
  }
}

// POST
export async function createProduct(
  product: Omit<Product, "id">,
): Promise<Product> {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
}

// DELETE
export async function removeProduct(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar producto");
}

// PUT
export async function updateProduct(
  id: number,
  product: Partial<Product>,
): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Error al actualizar producto");
  return res.json();
}
