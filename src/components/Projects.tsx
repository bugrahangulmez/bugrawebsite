import KazanimDefterimLogo from "../assets/images/kazanimdefterim.png"
import MyAligner from "../assets/images/myaligner.jpg"
import { Link } from "react-router-dom"

function Projects() {
  return (
    <div className="flex flex-row justify-center items-center h-full gap-[15vw]">
      <Link to={"/projects"}>
        <img src={KazanimDefterimLogo} alt="" className="w-[25vw] h-[20vw]" />
      </Link>
      <Link to={"/projects"}>
        <img src={MyAligner} alt="" className="w-[25vw] h-[20vw]" />
      </Link>
    </div>
  )
}

export default Projects
