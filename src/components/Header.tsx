import { useEffect, useState } from "react";
import icon from "../assets/images/code.png";

function Header() {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 1 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scroll);
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
        <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
          About
        </p>
        <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
          Projects
        </p>
        <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
          Blog
        </p>
        <p className="p-2 m-2 text-text1 hover:text-headerBugra duration-300">
          Contact
        </p>
      </div>
    </div>
  );
}

export default Header;
