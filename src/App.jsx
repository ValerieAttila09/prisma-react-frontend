import LandingPage from "./pages/LandingPage"
import UsersList from "./pages/UsersList"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { useAuth, useClerk, useUser } from "@clerk/clerk-react"
import { useEffect } from "react"

export default function App() {

  const { isSignedIn } = useUser()
  const { getToken } = useAuth()
  const { session } = useClerk()

  useEffect(() => {
    if (isSignedIn) {
      (async () => {
        const token = await getToken()
        await fetch("http://localhost:5000/me", {
          headers: { Authorization: `Bearer ${token}` }
        })
      })
    }
  }, [getToken, isSignedIn])

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/users' element={<UsersList />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}