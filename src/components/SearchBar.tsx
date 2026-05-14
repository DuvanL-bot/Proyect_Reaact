//Import Fuctions
import { useEffect } from 'react';
import type { Product } from '../services/types';

//type data
type Props = {
  products: Product[];
  search: string;
  setSearch: (val: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setFiltered: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function SearchBar({ products, search, setSearch, sortOrder, setSortOrder, setFiltered }: Props) {

  // logic of filter
  useEffect(() => {
    let result = [...products];
    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    result.sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
    setFiltered(result);
  }, [products, search, sortOrder, setFiltered]);

  // visual
  return (
    <div>
    <h1>Product Dashboard</h1>
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        style={{ padding: "10px" }}
      >
        <option value="asc">Lowest price</option>
        <option value="desc">Highest price</option>
      </select>
    </div>
    </div>
  );
}