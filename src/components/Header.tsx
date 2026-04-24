import Image from "next/image"
import logo from "../../public/assets/logo.png"
import { format } from "date-fns"

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-5 mt-10">
        <Image src={logo} alt="logo"/>
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
    </header>
  )
}

export default Header