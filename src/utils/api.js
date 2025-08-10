const API_URL = import.meta.env.VITE_API_URL || "https://prisma-react-backend-production.up.railway.app"

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, options)
  if(!res.ok){
    throw new Error(`API Error: ${res.status}`)
  }
  return res.json()
}