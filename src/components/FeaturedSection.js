import React from 'react'
import {featuredTitleText} from '../UniversalData'
import placeHolderImage from '../assets/FeaturedImage.jpg'

const FeaturedSection = () => {
    return (
        <div>
            <section className="featured">
            <div className="left">
            <div className="inner transition2">
            {featuredTitleText()}
            </div>
            </div>
            <img className="right transition2" src={placeHolderImage} alt="App Screenshot"/>
            </section>
        </div>
    )
}

export default FeaturedSection
