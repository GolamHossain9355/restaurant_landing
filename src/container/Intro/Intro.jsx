import { useRef, useState } from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants"

import "./Intro.css"

const Intro = () => {
   const [playVideo, setPlayVideo] = useState(false)
   const videoRef = useRef(null)

   const handleVideo = () => {
      setPlayVideo((prev) => !prev)

      if (playVideo) {
         videoRef.current.pause()
      } else {
         videoRef.current.play()
      }
   }

   return (
      <div className="video">
         <video
            src={meal}
            ref={videoRef}
            type="video/mp4"
            controls={false}
            loop
            muted
         />

         <div className="video__overlay flex__center">
            <div
               className="video__overlay-circle flex__center"
               onClick={handleVideo}
            >
               {playVideo ? (
                  <BsPauseFill color="#fff" fontSize={30} />
               ) : (
                  <BsFillPlayFill color="#fff" fontSize={30} />
               )}
            </div>
         </div>
      </div>
   )
}

export default Intro
