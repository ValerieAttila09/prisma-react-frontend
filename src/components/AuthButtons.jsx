import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react"

export default function AuthButtons() {
  const { isSignedIn } = useUser()
  if(!isSignedIn) {
    return (
      <div className="">
        <SignInButton mode="modal"/>
        <SignUpButton mode="modal"/>
      </div>
    )
  }

  return <UserButton/>
}