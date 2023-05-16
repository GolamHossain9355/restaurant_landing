/* eslint-disable react/prop-types */
import { SubHeading } from "../../components"
import { images, data } from "../../constants"

import "./Laurels.css"

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
   <div className="laurels__awards-card">
      <img src={imgUrl} alt="award card img" />

      <div className="laurels__awards-card__content">
         <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
         </p>
         <p className="p__cormorant">{subtitle}</p>
      </div>
   </div>
)

const Laurels = () => {
   return (
      <div className="app__bg app__wrapper section__padding" id="awards">
         <div className="app__wrapper_info">
            <SubHeading title="Awards & recognition" />
            <h1 className="headtext__cormorant">Our Laurels</h1>

            <div className="laurels__awards">
               {data.awards.map((award, index) => (
                  <AwardCard key={`${award.title} ${index}`} award={award} />
               ))}
            </div>
         </div>

         <div className="app__wrapper_img">
            <img src={images.laurels} alt="laurels img" />
         </div>
      </div>
   )
}

export default Laurels
