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
  cart,
  setCart,
  like,
  setlike,
}: Props) {
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

          <button onClick={() => addToCart({ product, cart, setCart })}>
            add
          </button>

          <button onClick={() => addTolike({ product, like, setlike })}>
            like
          </button>
        </div>
      </div>
    </div>
  );
}
