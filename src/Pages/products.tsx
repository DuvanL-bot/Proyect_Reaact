//imports
import { useEffect, useState } from "react";
import { loadProducts } from "../services/products";
import type { Product } from "../services/types";
import { NavigationBar } from "../components/navigationBar";
import { ProductCard } from "../Imports/importComp";
import style from "../App.module.css";

//function Products
export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  // const [filtered, setFiltered] = useState<Product[]>([]);  
  // const [search, setSearch] = useState("");                  
  // const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts({
      setProducts,
      setLoading,
      setError,
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <NavigationBar
        // sortOrder={sortOrder}
        // setSortOrder={setSortOrder}
        // products={products}
        // search={search}
        // setSearch={setSearch}
        // setFiltered={setFiltered}
      />
      <div className={style.divApp}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onOpenModal={() => {}} />
        ))}
      </div>
    </div>
  );
}
