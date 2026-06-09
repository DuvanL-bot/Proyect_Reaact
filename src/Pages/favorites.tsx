//Import
import { NavigationBar } from "../components/navigationBar";
import { useEffect } from "react";
import type { Product } from "../services/types";
import style from "../App.module.css";
import { addTolike } from "../Functions/addTolike";
import { keepFavdelete,keepFavProducts } from "../services/addPagesFavCar";

//types
type Props = {
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

//functioin favorite Page
export function Favorites({ like, setlike }: Props) {
  useEffect(() => {
    keepFavProducts()
    .then(setlike)
    .catch((err) => console.error("Error al cargar favoritos:", err));
  }, [setlike]);

  //function Button like
  async function handlelike(product: Product) {
    const isLiked = like.some((f) => f.id_product === product.id_product);

    if (isLiked) {
      try{
        await keepFavdelete(product.id_product);
        const updated = like.filter((f) => f.id_product !== product.id_product);
        setlike(updated);
      } catch (error) {
        console.error("Error al eliminar favorito:", error);
      }
    } else {
      addTolike({ product, like, setlike });
    }
  }

  return (
    <div>
      {/* style favorite */}
      <NavigationBar />

      <div className={style.favContent}>
        {/* Header */}
        <div className={style.favHeader}>
          <p className={style.favSubtitle}>
            {like.length} {like.length === 1 ? "product" : "products"} saved
          </p>
        </div>

        {/* Empty state */}
        {like.length === 0 ? (
          <div className={style.favEmptyState}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334155"
              strokeWidth="1.2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <p className={style.favEmptyTitle}>No favorites yet</p>
            <p className={style.favEmptySubtitle}>
              Start adding products you love ❤
            </p>
          </div>
        ) : (
          <div className={style.favGrid}>
            {like.map((product) => (
              <div key={product.id_product} className={style.favCard}>
                {/* Imagen */}
                <div className={style.favImageWrapper}>
                  <img
                    src={product.thumbnail_product}
                    alt={product.title_product}
                    className={style.favImage}
                  />
                  <span className={style.favCategoryBadge}>
                    {product.category_details}
                  </span>
                </div>

                {/* Info */}
                <div className={style.favCardBody}>
                  <h3 className={style.favCardTitle}>
                    {product.title_product}
                  </h3>
                  <p className={style.favCardDesc}>
                    {product.description_product}
                  </p>

                  <div className={style.favCardFooter}>
                    <span className={style.favCardPrice}>
                      ${product.price_product}
                    </span>

                    <button
                      className={style.favRemoveBtn}
                      onClick={() => handlelike(product)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#e24b4a"
                        stroke="#e24b4a"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
