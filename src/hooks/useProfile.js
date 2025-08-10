import { useEffect, useState } from "react"
import { useAuth } from "@clerk/clerk-react"
import { apiFetch } from "../utils/api"

export function useProfile() {
  const { isSignedIn, getToken } = useAuth()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (isSignedIn) {
      (async () => {
        const token = await getToken()
        const data = await apiFetch("/me", {
          headers: { Authorization: `Bearer ${token}` }
        })
        setProfile(data)
      })
    }
  }, [isSignedIn, getToken])

  return profile
}