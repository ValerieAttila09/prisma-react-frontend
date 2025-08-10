import { Link } from "react-router-dom"
import Plane from "../assets/images/place-flying-sunset-sky.png"
import { useProfile } from "../hooks/useProfile"
import { useUser } from "@clerk/clerk-react"
import Sponsor from "./Sponsor"
import { ArrowRightIcon, PlaneIcon } from "lucide-react"

export default function LandingPageComponent() {

  return (
    <div className="w-full px-4 sm:px-8 md:px-[4rem]">
      <div className="relative w-full h-screen">
        <div className="w-full h-full bg-radial-[at_50%_50%] from-blue-200/50 via-white to-white">
          <img src={Plane} className="mx-auto my-auto w-4/5 h-auto object-cover" alt="" />
        </div>
        <div className="absolute z-5 inset-x-0 bottom-0 top-[3rem] bg-transparent flex items-start justify-center">
          <div className="flex items-center gap-1 rounded-full border border-sky-500 px-3 py-1 shadow bg-sky-50">
            <PlaneIcon size={16} color="#21acff" />
            <span className="text-xs text-blue-600 outfit-regular">HAPPY TRAVELLING</span>
          </div>
        </div>
        <div className="absolute z-5 inset-x-0 bottom-0 top-[5rem] bg-transparent flex items-start justify-center">
          <h1 className="text-5xl text-shadow-xs text-neutral-900 outfit-regular max-w-3/5 text-center">Liburan Impian Dimulai di <span className="text-shadow-sm bg-clip-text text-5xl text-transparent outfit-semibold bg-gradient-to-r from-blue-500 via-cyan-300 to-sky-500">Travelkakao</span></h1>
        </div>
        <div className="absolute z-5 inset-x-0 bottom-0 top-[calc(100vh*2/3)] bg-transparent flex flex-col items-center justify-start gap-3">
          <p className="text-md text-neutral-600 outfit-regular text-center max-w-3/5">Hanya di Travelkakao Tiket pesawat garansi harga termurah! Jika ada yang lebih murah, kami bayar selisihnya. Plus, dukungan 24 jam untuk perubahan mendadak. <i>Liburan aman, Hati tenang!</i> </p>
          <div className="w-full flex items-center justify-center gap-2">
            <Link to={"/"} className="px-5 py-2 rounded-full flex items-center justify-center overflow-hidden bg-sky-500 hover:bg-blue-600 transition-all">
              <span className="text-white outfit-regular">Pesan Sekarang</span>
            </Link>
            <Link to={"/"} className="p-[2px] rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-500 group">
              <div className="rounded-full flex items-center gap-2 px-4 group py-2 bg-white group-hover:bg-blue-50 transition-all">
                <span>Cari Tiket Murah</span>
                <ArrowRightIcon className="rotate-[-45deg] group-hover:rotate-[0deg] transition-all" size={20} color="#21acff" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Sponsor />
    </div>
  )
}