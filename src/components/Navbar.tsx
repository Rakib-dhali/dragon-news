import Image from "next/image"
import Link from "next/link"
import user from "../../public/assets/user.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-285 mx-auto py-4 ">
        <h2 className="font-unifrakturmaguntia text-4xl text-center"><Link href="/">Dragon News</Link></h2>
        <ul className="flex items-center justify-center gap-3 leading-6 text-lg text-[#706F6F] font-medium">
           <Link className="hover:text-black " href="/home">Home</Link>
           <Link className="hover:text-black " href="/about">About</Link>
           <Link className="hover:text-black " href="/careers">Careers</Link>
        </ul>
        <div className="flex items-center justify-center gap-5">
            <Image height={41} width={41} src={user} alt="user"/> 
            <button className="bg-[rgb(40,40,40)] px-10 py-2 text-white font-semibold text-xl cursor-pointer hover:bg-[#000000]">Login</button>
        </div>
    </nav>
  )
}

export default Navbar