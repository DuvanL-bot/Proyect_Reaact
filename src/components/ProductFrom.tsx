//Import Fuctions
import style from "../App.module.css"

//type data
type Props = {
  title: string;
  price: string;
  category: string;
  error: string;
  success: string;
  setTitle: (val: string) => void;
  setPrice: (val: string) => void;
  setCategory: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

//product visualization
export function ProductFrom({
  setTitle,setPrice,setCategory,error,
  success, title,price,category,onSubmit,
}: Props) {
  return (//product design
    <form
      onSubmit={onSubmit}
      className={style.onSubmit}
    >
      <h2>Create Product</h2>

      <div className={style.divcreateP}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.input}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={style.input}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={style.input}
        />

        <button
          type="submit"
          className={style.buttonStyle}
        > Create Product
        </button>
      </div>

      {error && <p className={style.error}>{error}</p>}
      {success && (<p className={style.success}>{success}</p>
      )}
    </form>
  );
}


