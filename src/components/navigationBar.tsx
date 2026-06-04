//imports
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Favorites, Products, Cart } from "../Imports/importPages";
import type { Product } from "../services/types";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import style from "../App.module.css";

//Search data
type NavigationProps = {
  products?: Product[];
  search?: string;
  setSearch?: (val: string) => void;
  sortOrder?: "asc" | "desc";
  setSortOrder?: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setFiltered?: React.Dispatch<React.SetStateAction<Product[]>>;
};

//Function barPages
export function Pages() {
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/favorites"
          element={<Favorites like={like} setlike={setlike} />}
        />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}

export function NavigationBar({
  products,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  setFiltered,
}: NavigationProps) {

  const [internalSearch, setInternalSearch] = useState("");
  const [internalSortOrder, setInternalSortOrder] = useState<"asc" | "desc">("asc");
  const [, setInternalFiltered] = useState<Product[]>([]);
 
  // Usa los props externos si existen, si no usa el estado interno
  const resolvedProducts = products ?? [];
  const resolvedSearch = search ?? internalSearch;
  const resolvedSetSearch = setSearch ?? setInternalSearch;
  const resolvedSortOrder = sortOrder ?? internalSortOrder;
  const resolvedSetSortOrder = setSortOrder ?? setInternalSortOrder;
  const resolvedSetFiltered = setFiltered ?? setInternalFiltered;
  
  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.topBar}>
          <Link to="/products" className={style.brandLogo}>
            MI<span>SHOP</span>
          </Link>

          {/* Search */}
          <SearchBar
            products={resolvedProducts}
            search={resolvedSearch}
            setSearch={resolvedSetSearch}
            sortOrder={resolvedSortOrder}
            setSortOrder={resolvedSetSortOrder}
            setFiltered={resolvedSetFiltered}
          />

          {/* page favorite */}
          <div className={style.quickActions}>
            <Link to="/favorites" className={style.actionLinkItem}>
              <span className={style.actionIcon}>❤️</span>
              <span className={style.actionText}>Favoritos</span>
            </Link>

            {/* page cart */}
            <Link to="/cart" className={style.actionLinkItem}>
              <span className={style.actionIcon}>🛒</span>
              <span className={style.actionText}>Carrito</span>
            </Link>
          </div>
        </div>

        {/* nav pages */}
        <nav className={style.bottomNav}>
          <ul className={style.horizontalNavList}>
            <li className={style.horizontalNavItem}>
              <Link className={style.navMenuLink} to="/products">
                Productos
              </Link>
            </li>
            <li className={style.horizontalNavItem}>
              <Link className={style.navMenuLink} to="/favorites">
                Favoritos
              </Link>
            </li>
            <li className={style.horizontalNavItem}>
              <Link className={style.navMenuLink} to="/cart">
                Mi Carrito
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
