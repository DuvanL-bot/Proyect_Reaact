const API_URL = "http://localhost:3006";

export async function loginService(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Credenciales incorrectas");

  const data = await res.json(); // { token, role }
  return data;
}