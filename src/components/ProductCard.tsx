//Import Fuctions
import type { Product } from "../services/types";
import style from"../App.module.css"

//type data
type Props = {
  product: Product;                        
  onOpenModal: (product: Product) => void;    
  onDelete: (id: number) => void;
}

function ProductCard({ product, onOpenModal,onDelete}: Props) {
  return (//Buttons
    <div className={style.divCard}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className={style.imaCard}
      />

      <div style={{ padding: "15px" }}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.category}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button
            onClick={() => onOpenModal(product)}  
            className={style.buttonStyle}
          >
            View
          </button>

          <button
            onClick={() => onDelete(product.id)}   
            className={style.delet}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
