import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react"

export default function AuthButtons() {
  const { isSignedIn } = useUser()
  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-1">
        <SignInButton mode="modal" className="outfit-regular bg-neutral-900 text-white hover:bg-neutral-700 transition-all rounded-md px-3 py-1 cursor-pointer">
          Login
        </SignInButton>
        <SignUpButton mode="modal" className="outfit-regular bg-neutral-900 text-white hover:bg-neutral-700 transition-all rounded-md px-3 py-1 cursor-pointer">
          Sign Up
        </SignUpButton>
      </div>
    )
  }

  return <UserButton />
}