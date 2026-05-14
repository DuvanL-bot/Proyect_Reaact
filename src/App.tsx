//Imposts
import { useEffect } from 'react';
import { useUserProducts } from './hooks/UserProducts';
import {SearchBar} from './components/SearchBar';
import {CreateProducts} from './Functions/Create';
import {ProductModal} from './components/ProductModal';
import { deleteProduct } from './Functions/deleteProduct';
import ProductForm from './components/ProductFrom'; 
import loadProducts from "./services/products";
import ProductCard from './components/ProductCard';
import style from'./App.module.css';

//Main component
export default function App() {
  const {
    products, setProducts, search, setSearch, loading, setLoading,
    sortOrder, setSortOrder, setError, setFiltered, filtered,
    setSuccess, setCategory, setPrice, setTitle,
    title, price, category, error, success,                              
    selectedProduct, setShowModal, setSelectedProduct,
  } = useUserProducts();                              

//Effect
  useEffect(() => {
    loadProducts({ setProducts, setLoading, setError });
  }, [setError,setLoading,setProducts]);                                               

//Event
  function handleAddProduct(e: React.FormEvent) {
  e.preventDefault();
  setError("");
  setSuccess("");
    CreateProducts({ products, setProducts, setSuccess,
      setCategory, setPrice, setTitle, setError,
      title, price, category                         
    });
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <SearchBar
        products={products}
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setFiltered={setFiltered}
      />
        <ProductForm
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
//Function to view modal button and delete button
<div className={style.divApp}>
  {filtered.map((product) => (
    <ProductCard
      key={product.id}
      product={product} 
      onOpenModal={(p) => { setSelectedProduct(p); setShowModal(true); }}
      onDelete={(id) => deleteProduct({ products, setProducts, id, selectedProduct, setShowModal })}
    />
  ))}
</div>
Function view Modal
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

