import React from 'react'

import ContentSlider from '../../components/ContentSlider'
import Banner from '../../components/Banner'

import { mainCourseList } from './slideData'

import styles from "./styles.module.css"

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const MainCourse = () => {
  return (
    <div>
    <Banner picturePath={bannerPicture}/>
    <div className={styles.main_course_container}>
        <ContentSlider childrenImageHeight="medium" numOfSlides={3} slideContent={mainCourseList}/>
    </div>
</div>
  )
}

export default MainCourse