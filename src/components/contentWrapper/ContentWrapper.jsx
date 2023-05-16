/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { images } from "../../constants"
import "./ContentWrapper.css"

function ContentWrapper({ children, className, align }) {
   return (
      <div
         className={`${
            align === "left" ? "content-wrapper-left" : "content-wrapper-right"
         } ${className}`}
      >
         {children}
      </div>
   )
}

ContentWrapper.Header = ({ children, className }) => {
   return <div className={`headtext__cormorant ${className}`}>{children}</div>
}

ContentWrapper.SpoonImage = ({ className }) => {
   return (
      <img src={images.spoon} className={`content-wrapper__img ${className}`} />
   )
}

ContentWrapper.Paragraph = ({ children, className }) => {
   return (
      <p className={`content-wrapper__paragraph p__opensans ${className}`}>
         {children}
      </p>
   )
}

ContentWrapper.Button = ({ children, className }) => {
   return (
      <button type="button" className={`custom__button ${className}`}>
         {children}
      </button>
   )
}

export default ContentWrapper
