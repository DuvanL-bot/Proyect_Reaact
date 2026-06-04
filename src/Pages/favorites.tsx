//Import
import { NavigationBar } from "../components/navigationBar";
import { useEffect } from "react";
import type { Product } from "../services/types";
import style from "../App.module.css";
import { addTolike } from "../Functions/addTolike";

//types
type Props = {
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

//functioin favorite Page
export function Favorites({ like, setlike }: Props) {
  useEffect(() => {
    const savelike = localStorage.getItem("like");

    if (savelike) {
      setlike(JSON.parse(savelike));
    }
  }, [setlike]);

  //function Button like
  function handlelike(product: Product) {
    const isLiked = like.some((f) => f.id_product === product.id_product);

    if (isLiked) {
      const removelike = like.filter(
        (f) => f.id_product !== product.id_product,
      );
      setlike(removelike);

      localStorage.setItem("like", JSON.stringify(removelike));
    } else {
      addTolike({ product, like, setlike });
    }
  }

  return (
    <div>
      {/* style favorite */}
      <NavigationBar 
              sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        products={products}
        search={search}
        setSearch={setSearch}
        setFiltered={setFiltered}/>

      <div style={{ padding: "20px" }}>
        <h1>Favorites</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {like.map((product) => {
            const isLiked = like.some(
              (f) => f.id_product === product.id_product,
            );

            return (
              // desing info product
              <li key={product.id_product} style={{ marginBottom: "20px" }}>
                <img
                  src={product.thumbnail_product}
                  width="80"
                  alt={product.title_product}
                />

                <p>{product.title_product}</p>
                <p>${product.price_product}</p>

                {/* button heart */}
                <button
                  className={style.like}
                  onClick={() => handlelike(product)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={isLiked ? "#e24b4a" : "none"}
                    stroke="#e24b4a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "fill 0.2s ease, stroke 0.2s ease",
                    }}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
