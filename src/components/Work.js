import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

function Work() {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "We celebrate the diversity of world cuisines, from hearty comfort foods to exotic delicacies, and we encourage you to experiment, innovate, and make each recipe your own."
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "We celebrate the diversity of world cuisines, from hearty comfort foods to exotic delicacies, and we encourage you to experiment, innovate, and make each recipe your own."
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "We celebrate the diversity of world cuisines, from hearty comfort foods to exotic delicacies, and we encourage you to experiment, innovate, and make each recipe your own."
        },
    ]
  return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-subheading'>How It Works</h1>
                <p className='primary-text'>
                What began as a personal quest for the perfect recipe has blossomed into a vibrant online
                </p>
            </div>
                <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
                    </div>
                        
                ))}
            </div>
        </div>
  )
}

export default Work