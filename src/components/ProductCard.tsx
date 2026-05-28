//Import Fuctions
import type { Product } from "../services/types";
import { addToCart } from "../Functions/addCart.ts";
import { addTolike } from "../Functions/addTolike.ts";
import style from "../App.module.css";

//type data
type Props = {
  product: Product;
  onOpenModal: (product: Product) => void;
  onDelete: (id: number) => void;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

export function ProductCard({
  product,
  onOpenModal,
  onDelete,
  cart = [],      
  setCart,
  like = [], 
  setlike,
}: Props) {

   const isLiked = like.some((p) => p.id_product === product.id_product);

   function handlelike() {
    if (isLiked) {
      const updated = like.filter((p)=>p.id_product !== product.id_product)
     setlike(updated);
      localStorage.setItem("like", JSON.stringify(updated));
    } else {
      addTolike({ product, like, setlike });
    }
   }

  return (
    //Buttons
    <div className={style.divCard}>
      <img
        src={product.thumbnail_product}
        alt={product.title_product}
        className={style.imaCard}
      />
      <div style={{ padding: "15px" }}>
        <h3>{product.title_product}</h3>
        <p>${product.price_product}</p>
        <p>{product.description_product}</p>
        <p>{product.category_details}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button
            onClick={() => onOpenModal(product)}
            className={style.buttonStyle}
          >
            View
          </button>

          <button
            onClick={() => onDelete(product.id_product)}
            className={style.delet}
          >
            Delete
          </button>

          <button className={style.Cartbutton}
           onClick={() => addToCart({ product, cart, setCart })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>

          <button className={style.like} onClick={handlelike}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isLiked ? "#e24b4a" : "none"}
              stroke={isLiked ? "#e24b4a" : "currentColor"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "fill 0.2s ease, stroke 0.2s ease" }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
