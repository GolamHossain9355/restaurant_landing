import React from "react"
import { ContentWrapper } from "../../components"

import { images } from "../../constants"

import "./AboutUs.css"

const AboutUs = () => (
   <div className="about-us app__bg flex__center section__padding" id="about">
      <div className="about-us__overlay flex__center">
         <img src={images.G} alt="g letter" />
      </div>

      <div className="about-us__content flex__center">
         <ContentWrapper align="right" className={"about-us__content--flex-1"}>
            <ContentWrapper.Header>About Us</ContentWrapper.Header>
            <ContentWrapper.SpoonImage />
            <ContentWrapper.Paragraph>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
               pharetra adipiscing ultrices vulputate posuere tristique. In sed
               odio nec aliquet eu proin mauris et.
            </ContentWrapper.Paragraph>
            <ContentWrapper.Button>Know More</ContentWrapper.Button>
         </ContentWrapper>

         <div className="about-us__content-knife">
            <img src={images.knife} alt="knife" />
         </div>

         <ContentWrapper align="left" className={"about-us__content--flex-1"}>
            <ContentWrapper.Header>Our History</ContentWrapper.Header>
            <ContentWrapper.SpoonImage />
            <ContentWrapper.Paragraph>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
               pharetra adipiscing ultrices vulputate posuere tristique. In sed
               odio nec aliquet eu proin mauris et.
            </ContentWrapper.Paragraph>
            <ContentWrapper.Button>Know More</ContentWrapper.Button>
         </ContentWrapper>
      </div>
   </div>
)

export default AboutUs
