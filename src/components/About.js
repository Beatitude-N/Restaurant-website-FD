import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
            <p className='primary-text'>
            What began as a personal quest for the perfect recipe has blossomed into a vibrant 
            </p>
            <p className='primary-text'>
            Online community dedicated to the art of cooking and the joy of savoring exquisite dishes.
            </p>
            <div className="about-buttons-container">
              <button className="secondary-button">learn More</button>
              <button className="watch-video-button">
                <BsFillPlayCircleFill/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About