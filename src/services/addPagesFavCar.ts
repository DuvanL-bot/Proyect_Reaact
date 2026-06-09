const API_URL = "http://localhost:3006";

function keepAPi() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

//Cart

export async function keepCartProduct() {
  const res = await fetch(`${API_URL}/cart`, { headers: keepAPi() });
  if (!res.ok) throw new Error("Error getting cart");
  return res.json();
}

export async function keepCartPost(product: object) {
    const res = await fetch(`${API_URL}/cart`, { 
        method:"Post",
        headers:keepAPi(),
        body:JSON.stringify(product),
     });
     if (!res.ok) throw new Error("Error adding to cart")
        return res.json();
}

export async function keepCartdelete(id_product: number) {
    const res = await fetch(`${API_URL}/cart/${id_product}`,{
        method:"Delete",
        headers:keepAPi(),
    })
    if(!res.ok) throw new Error("Error removing from cart")
        return res.json();
}

//favorite

export async function keepFavProducts() {
  const res = await fetch(`${API_URL}/favorites`, { headers: keepAPi() });
  if (!res.ok) throw new Error("Error getting favorites");
  return res.json();
}

export async function keepFavPost(product: object) {
    const res = await fetch(`${API_URL}/favorites`, { 
        method:"Post",
        headers:keepAPi(),
        body:JSON.stringify(product),
     });
     if (!res.ok) throw new Error("Error adding to favorites")
        return res.json();
}

export async function keepFavdelete(id_product: number) {
    const res = await fetch(`${API_URL}/favorites/${id_product}`,{
        method:"Delete",
        headers:keepAPi(),
    })
    if(!res.ok) throw new Error("Error removing from favorites")
        return res.json();
}