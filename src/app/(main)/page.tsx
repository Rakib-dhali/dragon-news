import NewsMarquee from "@/components/Marquee"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div className="max-w-285 mx-auto py-5">
      <div className="flex rounded-lg bg-[#f3f3f3] p-3 gap-5">
        <div className="bg-red-500 text-white font-bold px-5 py-2">latest</div>
        <NewsMarquee/>
      </div>
       <Navbar/>
    </div>
  )
}

export default page