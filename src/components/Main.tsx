import { Projects } from "."
import { ImagesAnim, OnboardingAnim, TextAnim } from "../animations"

function Main() {
  return (
    <div className="h-full">
      <div className="w-screen justify-center items-center h-screen space-y-10 pt-[19vh]">
        {/* <OnboardingAnim /> */}
        <div className="h-[15vh]">
          <TextAnim />
        </div>
        <div className="h-[73vh]">
          <ImagesAnim />
        </div>
      </div>
      <div className="w-screen justify-center items-center py-[5vh] h-screen bg-text1">
        <OnboardingAnim />
      </div>
      <div className="w-screen justify-center items-center py-[5vh] h-screen bg-white">
        <Projects />
      </div>
    </div>
  )
}

export default Main
