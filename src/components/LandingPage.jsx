import { useProfile } from "../hooks/useProfile"

export default function LandingPageComponent() {

  const profile = useProfile()

  return (
    <div className="w-full py-6 px-8">
      <h1 className="text-4xl outfit-semibold text-neutral-900">
        Welcome, {profile?.name}
      </h1>
    </div>
  )
}