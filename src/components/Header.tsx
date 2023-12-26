import { useEffect, useState } from "react"
import icon from "../assets/images/code.png"
import { Link } from "react-router-dom"

function Header() {
  const [scroll, setScroll] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 1 ? setScroll(true) : setScroll(false)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`w-screen bg-bg1 fixed flex flex-row h-[12vh] border-b-2 border-headerBugra top-0 transition-transform duration-300 ${
        !scroll ? "-translate-y-[12vh]" : "translate-y-0"
      }`}
    >
      <div className=" w-[30vw] flex justify-center items-center gap-6">
        <h1 className="text-[48px] font-extralight text-headerBugra">Bugra</h1>
        <img src={icon} alt="code" className="w-16" />
      </div>
      <div className="flex flex-row w-[70vw] justify-center items-center">
        <Link to={"/about"}>
          <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
            About
          </p>
        </Link>
        <Link to={"/projects"}>
          <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
            Projects
          </p>
        </Link>
        <Link to={"/blog"}>
          <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
            Blog
          </p>
        </Link>
        <Link to={"/contact"}>
          <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
            Contact
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header
