//Import Functions
import { useState } from "react";
import type { Product } from "../services/types";

//set and State
export function useUserProducts() { 
  const [products, setProducts] = useState<Product[]>([]); 
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//Hooks
  return {
    products, setProducts, filtered, setFiltered,
    search, setSearch, loading, setLoading,
    showModal, setShowModal, title, setTitle,
    price, setPrice, category, setCategory,
    error, setError, success, setSuccess,
    sortOrder, setSortOrder, selectedProduct, setSelectedProduct
  };
}