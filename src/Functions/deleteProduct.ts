import type { Product } from "../services/types";

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  id: number;
  selectedProduct: Product | null;
  setShowModal: (val: boolean) => void;
}

export function deleteProduct({ products, setProducts, id, selectedProduct, setShowModal }: Props): void {
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) return;

  const updated = products.filter((product) => product.id_product !== id);
  setProducts(updated);
  localStorage.setItem("products_backup", JSON.stringify(updated));

  if (selectedProduct?.id_product === id) {
    setShowModal(false);
  }
}


