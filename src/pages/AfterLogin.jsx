import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"

export default function AfterLogin() {
  
  const { getToken } = useAuth()

  async function syncUser() {
    const token = await getToken()
    await fetch('https://prisma-react-backend-production.up.railway.app/api/sync-user', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  useEffect(() => {
    syncUser()
  }, [])
  
  return (
    <div className="p-4">
      <button onClick={syncUser} className="ms-2 rounded-md bg-white border border-[#d7d7d7] px-4 py-1 hover:shadow-md hover:bg-[#fafafa] transition-all">Sync User</button>
    </div>
  )
}