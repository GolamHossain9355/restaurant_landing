import { SubHeading, MenuItem } from "../../components"
import { ContentWrapper } from "../../components"

import "./SpecialMenu.css"
import { images, data } from "../../constants"

const SpecialMenu = () => (
   <div className="special-menu flex__center section__padding" id="menu">
      <div className="special-menu__title">
         <SubHeading text="Menu that fits you palette" />
         <h1 className="headtext__cormorant">Todays Special</h1>
      </div>

      <div className="special-menu__content">
         <div className="special-menu__wine flex__center">
            <p className="special-menu__heading">Wine & Beer</p>
            <div className="special-menu__items">
               {data.wines.map((wine, index) => (
                  <MenuItem
                     key={`${wine.title} ${index}`}
                     title={wine.title}
                     price={wine.price}
                     tags={wine.tags}
                  />
               ))}
            </div>
         </div>

         <div className="special-menu__img">
            <img src={images.menu} alt="menu img" />
         </div>

         <div className="special-menu__cocktails flex__center">
            <p className="special-menu__heading">Cocktails</p>
            <div className="special-menu__items">
               {data.cocktails.map((cocktail, index) => (
                  <MenuItem
                     key={`${cocktail.title} ${index}`}
                     title={cocktail.title}
                     price={cocktail.price}
                     tags={cocktail.tags}
                  />
               ))}
            </div>
         </div>
      </div>

      <div style={{ marginTop: "15px" }}>
         <ContentWrapper.Button>View More</ContentWrapper.Button>
      </div>
   </div>
)

export default SpecialMenu
