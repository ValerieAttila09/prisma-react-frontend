import lionAir from "../assets/images/lion_air.png"
import garuda from "../assets/images/garuda_indonesia.png"
import eiger from "../assets/images/eiger.png"
import reddoorz from "../assets/images/reddoorz.png"
import zurich from "../assets/images/zurich.png"
import aston from "../assets/images/aston_hotel.png"
import airbnb from "../assets/images/airbnb.png"

const sponsors = [lionAir, garuda, airbnb, eiger, reddoorz, zurich, aston]

export default function Sponsor() {
  return (
    <div className="w-full py-[6rem]">
      <h1 className="text-center text-2xl outfit-medium text-neutral-600">Sponsored by</h1>
      <div className="max-w-4/5 mx-auto flex flex-wrap justify-center items-center gap-4">
        {sponsors.map((logo, idx) => (
          <img src={logo} key={idx} alt={`${idx + 1}`} className="h-12 w-auto mx-4 my-2 inline-block" />
        ))}
      </div>
    </div>
  )
}