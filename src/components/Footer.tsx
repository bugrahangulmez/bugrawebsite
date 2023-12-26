import { Link } from "react-router-dom"
import GitHubLogo from "../assets/images/githublogo.png"
import LinkedinLogo from "../assets/images/linkedinlogo.png"
import ReactLogo from "../assets/images/reactlogo.png"
import ReactNativeLogo from "../assets/images/reactnativelogo.png"

function Footer() {
  return (
    <div className="h-[20vh] w-[80vw] ml-[10vw] flex flex-row bg-1">
      {/* Socials */}
      <div className="m-[1vw] px-[3vw]">
        <h1 className="text-black font-extralight text-lg tracking-widest">
          Socials
        </h1>
        <Link
          to={"https://github.com/bugrahangulmez"}
          className="flex flex-row justify-start items-center mt-[1vh]"
        >
          <img src={GitHubLogo} alt="" className="w-[2vw] h-[2vw] mr-[0.7vw]" />
          <p className="hover:text-slate-600 duration-300 text-black">GitHub</p>
        </Link>
        <Link
          to={"https://linkedin.com/in/bugrahangulmez"}
          className="flex flex-row justify-start items-center mt-[2vh]"
        >
          <img
            src={LinkedinLogo}
            alt=""
            className="w-[2vw] h-[2vw] mr-[0.7vw]"
          />
          <p className="hover:text-sky-800 duration-300 text-black">Linkedin</p>
        </Link>
      </div>
      {/* Resources */}
      <div className="m-[1vw] px-[3vw]">
        <h1 className="text-black font-extralight text-lg border-white tracking-widest">
          Resources
        </h1>
        <Link
          to={"https://react.dev/"}
          className="flex flex-row justify-start items-center mt-[1vh]"
        >
          <img src={ReactLogo} alt="" className="w-[2vw] h-[2vw] mr-[0.7vw]" />
          <p className="hover:text-slate-600 duration-300 text-black">React</p>
        </Link>
        <Link
          to={"https://reactnative.dev/"}
          className="flex flex-row justify-start items-center mt-[2vh]"
        >
          <img
            src={ReactNativeLogo}
            alt=""
            className="w-[2vw] h-[2vw] mr-[0.7vw]"
          />
          <p className="hover:text-sky-800 duration-300 text-black">
            React Native
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
