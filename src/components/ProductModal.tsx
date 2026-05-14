//Import Fuctions
import type { Product } from "../services/types";
import styles from "../App.module.css";

//type data
type Props = {
  selectedProduct: Product;
  setShowModal: (val: boolean) => void;
  setSelectedProduct: (val: Product | null) => void;
};

//logic Modal
export function ProductModal({
  selectedProduct,
  setShowModal,
  setSelectedProduct,
}: Props) {
  function closeModal() {
    setShowModal(false);
    setSelectedProduct(null);
  }


  return (//review
    <div className={styles.modalcard} onClick={closeModal}>
      <div className={styles.cardproduc} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
        />

        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <h3>${selectedProduct.price}</h3>

        <button className={styles.buttonStyle} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
