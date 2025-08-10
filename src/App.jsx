import LandingPage from "./pages/LandingPage"
import UsersList from "./pages/UsersList"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
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