import { Link } from "react-router-dom"
import Plane from "../assets/images/place-flying-sunset-sky.png"
import { useProfile } from "../hooks/useProfile"
import { useUser } from "@clerk/clerk-react"

export default function LandingPageComponent() {
  const profile = useProfile()
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) {
    return null
  }

  return (
    <div className="w-full py-[3rem] sm:py-[5rem] px-4 sm:px-8 md:px-[4rem]">
      <div className="relative w-full h-[calc(100vh-8rem)]">
        <img src={Plane} className="mx-auto my-auto w-4/5 h-auto object-cover" alt="" />
        <div className="absolute z-5 inset-0 bg-transparent pt-[6rem] flex items-start justify-center">
          <h1 className="text-5xl text-shadow-xs text-neutral-900 outfit-regular max-w-3/5 text-center">Liburan Impian Dimulai di <span className="text-shadow-sm bg-clip-text text-6xl text-transparent outfit-semibold bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-500">Travelkakao</span></h1>
        </div>
        <div className="absolute z-5 inset-0 bg-transparent flex flex-col items-center justify-end gap-3">
          <p className="text-md text-neutral-600 outfit-regular text-center max-w-3/5">Hanya di Travelkakao Tiket pesawat garansi harga termurah! Jika ada yang lebih murah, kami bayar selisihnya. Plus, dukungan 24 jam untuk perubahan mendadak. <i>Liburan aman, Hati tenang!</i> </p>
          <div className="w-full flex items-center justify-center gap-2">
            <Link to={"/"} className="px-5 py-2 rounded-lg flex items-center justify-center overflow-hidden bg-sky-500 hover:bg-blue-600 transition-all">
              <span className="text-white outfit-regular">Pesan Sekarang</span>
            </Link>
            <Link to={"/"} className="p-[2px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-500">
              <div className="rounded-md px-5 py-2 bg-white">
                Cari Tiket Murah
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}