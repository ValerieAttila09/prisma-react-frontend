const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, options)
  if(!res.ok){
    throw new Error(`API Error: ${res.status}`)
  }
  return res.json()
}