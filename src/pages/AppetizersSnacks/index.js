import React from 'react'
import Banner from '../../components/Banner'
import ContentSlider from '../../components/ContentSlider'

import { appetizersSnacks } from './slideData'

import styles from "./styles.module.css"

const bannerPicture = window.location.origin + "/assets/images/tofu.png"


const AppetizersSnacks = () => {
  return (
    <div className={styles.appetizers_snacks_container}>
      <Banner picturePath={bannerPicture}/>
      <ContentSlider childrenImageHeight="medium" numOfSlides={3} slideContent={appetizersSnacks}/> 
    </div>
  )
}

export default AppetizersSnacks