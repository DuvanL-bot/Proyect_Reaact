//Imposts
import {
  ProductCard,
  ProductModal,
  ProductFrom,
  NavigationBar,
} from "../Imports/importComp";
import { useEffect, useState } from "react";
import { useUserProducts } from "../hooks/UserProducts";
import { CreateProducts, deleteProduct } from "../Imports/importFunctions";
import { loadProducts } from "../services/products";
import style from "../App.module.css";
import type { Product } from "../services/types";


//Function load products
export function Home() {
  const {
    products,
    setProducts,
    search,
    setSearch,
    loading,
    setLoading,
    sortOrder,
    setSortOrder,
    setError,
    setFiltered,
    filtered,
    setSuccess,
    setCategory,
    setPrice,
    setTitle,
    title,
    price,
    category,
    error,
    success,
    selectedProduct,
    setShowModal,
    setSelectedProduct,
  } = useUserProducts();
  const [cart, setCart] = useState<Product[]>([]);
  const [like, setlike] = useState<Product[]>([]);

  //Effect
  useEffect(() => {
    loadProducts({ setProducts, setLoading, setError });
  }, [setError, setLoading, setProducts]);

  useEffect(() => {
  setFiltered(products);
}, [products, setFiltered]);

  //Event
  function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    CreateProducts({
      products,
      setProducts,
      setSuccess,
      setCategory,
      setPrice,
      setTitle,
      setError,
      title,
      price,
      category,
    });
  }

  if (loading) return <p>Cargando...</p>;

  //desing
  return (
    <div className="container">
      <NavigationBar
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        products={products}
        search={search}
        setSearch={setSearch}
        setFiltered={setFiltered}
      />

      {/* Visible product */}
      <ProductFrom
        title={title}
        price={price}
        category={category}
        error={error}
        success={success}
        setTitle={setTitle}
        setPrice={setPrice}
        setCategory={setCategory}
        onSubmit={handleAddProduct}
      />

      {/* product container */}
      <div className={style.divApp}>
        {filtered.map((product) => (
          <ProductCard
            key={product.id_product}
            product={product}
            onOpenModal={(p) => {
              setSelectedProduct(p);
              setShowModal(true);
            }}
            onDelete={(id) =>
              deleteProduct({
                products,
                setProducts,
                id,
                selectedProduct,
                setShowModal,
              })
            }
            cart={cart}
            setCart={setCart}
            like={like}
            setlike={setlike}
          />
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setShowModal={setShowModal}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}
