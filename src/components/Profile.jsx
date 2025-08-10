import { useUser } from "@clerk/clerk-react"
import { useProfile } from "../hooks/useProfile"

export default function Profile() {
  const { isSignedIn, user } = useUser()
  const profile = useProfile()

  if (!isSignedIn) return null

  return (
    <div className="">
      <h1 className="text-md text-neutral-700">Welcome,
        <span className="text-neutral-900 outfit-medium">{profile?.name || user.fullName || user.username}/</span>
      </h1>
      <h3 className="text-neutral-700 outfit-regular">{profile?.email}</h3>
    </div>
  )
}