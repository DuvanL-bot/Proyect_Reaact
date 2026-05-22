import { NavigationBar } from "../components/navigationBar";
import { useEffect } from "react";
import type { Product } from "../services/types";

type Props = {
  like: Product[];
  setlike: React.Dispatch<React.SetStateAction<Product[]>>;
};

export function Favorites({ like, setlike }: Props) {
  useEffect(() => {
    const savelike = localStorage.getItem("like");

    if (savelike) {
      setlike(JSON.parse(savelike));
    }
  }, []);

  return (
    <div>
      <NavigationBar />
      <div style={{ padding: "20px" }}>
        <h1>Favorites</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {like.map((product, index) => (
            <li key={`${product.id_product}-${index}`}>
              <img src={product.thumbnail_product} width="80" />

              <p>{product.title_product}</p>

              <p>${product.price_product}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
