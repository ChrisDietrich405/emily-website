import React from 'react'
import Banner from '../../components/Banner'
import ContentSlider from '../../components/ContentSlider'

import {smoothiesDrinksList} from "./slideData"

import styles from "./styles.module.css"

const bannerPath = window.location.origin + "/assets/images/tofu.png"
const SmoothiesDrinks = () => {
  return (
    <div className={styles.smoothies_drinks_container}>
        <Banner picturePath={bannerPath}/>
        <ContentSlider childrenImageHeight="large" numOfSlides={2} slideContent={smoothiesDrinksList}/>
    </div>
  )
}

export default SmoothiesDrinks