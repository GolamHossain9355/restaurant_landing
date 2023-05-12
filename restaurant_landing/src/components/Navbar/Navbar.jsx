import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import "./Navbar.css"
import images from "../../constants/images"

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false)

   return (
      <nav className="navbar">
         <div className="navbar__logo">
            <img src={images.gericht} alt="logo" />
         </div>

         <ul className="navbar__links">
            <li className="p__opensans">
               <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
               <a href="#about">About</a>
            </li>
            <li className="p__opensans">
               <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
               <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans">
               <a href="#contact"></a>Contact
            </li>
         </ul>

         <div className="navbar__login">
            <a href="#login" className="p__opensans">
               Log In / Register
            </a>
            <div />
            <a href="/" className="p__opensans">
               Book Table
            </a>
         </div>

         <div className="navbar__small-screen">
            <GiHamburgerMenu
               color="#fff"
               fontSize={27}
               onClick={() => setToggleMenu(true)}
            />
            {toggleMenu ? (
               <div className="navbar__small-screen__overlay flex__center slide-bottom">
                  <MdOutlineRestaurantMenu
                     fontSize={27}
                     className="overlay__close"
                     onClick={() => setToggleMenu(false)}
                  />
                  <ul className="navbar__links-small-screen">
                     <li className="p__opensans">
                        <a href="#home">Home</a>
                     </li>
                     <li className="p__opensans">
                        <a href="#about">About</a>
                     </li>
                     <li className="p__opensans">
                        <a href="#menu">Menu</a>
                     </li>
                     <li className="p__opensans">
                        <a href="#awards">Awards</a>
                     </li>
                     <li className="p__opensans">
                        <a href="#contact"></a>Contact
                     </li>
                  </ul>

                  <div className="navbar__login-small-screen">
                     <a href="#login" className="p__opensans">
                        Log In / Register
                     </a>
                     <a href="/" className="p__opensans">
                        Book Table
                     </a>
                  </div>
               </div>
            ) : null}
         </div>
      </nav>
   )
}

export default Navbar
