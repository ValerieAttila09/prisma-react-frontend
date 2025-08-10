import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

export default function UsersList() {

  const [users, setUsers] = useState([])
  const [form, setForm] = useState({
    name: "", email: ""
  })

  useEffect(() => {
    try {
      fetch("https://prisma-react-backend-production.up.railway.app/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    } catch (error) {
      console.error("Failed to fetch Users! error : ", error)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://prisma-react-backend-production.up.railway.app/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    const data = await res.json()
    setUsers([...users, data])
    setForm({
      name: "", email: ""
    })
  }

  return (
    <div className="">
      <Navbar/>

      <div className="max-w-4xl mx-auto p-4 flex flex-col space-y-5">
        <h1 className="mb-4 text-4xl text-neutral-900">Daftar User</h1>
        <form className="w-full sm:w-3/5 mx-auto grid gap-2 mb-4" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-1">
            <label htmlFor="name" className="text-md text-neutral-700">Username</label>
            <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} name="name" id="name" className="rounded-md px-3 py-2 border border-[#d7d7d7] focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" required />
          </div>
          <div className="mb-1 flex flex-col gap-1">
            <label htmlFor="email" className="text-md text-neutral-700">Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} name="email" id="email" className="rounded-md px-3 py-2 border border-[#d7d7d7] focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" required />
          </div>
          <button type="submit" className="rounded-md px-6 py-2 bg-white border border-[#d7d7d7] hover:bg-[#fafafa] transition-all">Kirim</button>
        </form>
        <div className="w-full">
          <h1 className="text-2xl text-neutral-900">User</h1>
          <ul>
            {users.map((u) => (
              <li className="py-1" key={u.id}>{u.name} - {u.email}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}