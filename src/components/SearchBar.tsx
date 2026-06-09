//Import Fuctions
import { useEffect, useRef } from "react";
import type { Product } from "../services/types";
import style from "../App.module.css";

//type data
type Props = {
  products: Product[];
  search: string;
  setSearch: (val: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setFiltered: React.Dispatch<React.SetStateAction<Product[]>>;
};

//Function Sarch
export function SearchBar({
  products,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  setFiltered,
}: Props) {

  const setFilteredRef = useRef(setFiltered);
  useEffect(() => {
    setFilteredRef.current = setFiltered;
  });

  // logic of filter
  useEffect(() => {
    let result = Array.isArray(products) ? [...products] : [];
    if (search  && search.trim() !== "") {
      result = result.filter(
        (p) =>
          p.title_product &&
          p.title_product.toLowerCase().includes(search.toLowerCase()),
      );
    }
    result.sort((a, b) => {
      const priceA = a.price_product || 0;
      const priceB = b.price_product || 0;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
    //  setFilteredRef.current(result)
  }, [products, search, sortOrder]);

  // visual
  return (
    <div className={style.searchWrapper}>
      <div className={style.searchForm}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.searchInput}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className={style.sortSelect}
        >
          <option value="asc">Lowest price</option>
          <option value="desc">Highest price</option>
        </select>
      </div>
    </div>
  );
}
