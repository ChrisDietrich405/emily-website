import React from 'react'

import Banner from '../../components/Banner'
import Accordion from '../../components/Accordion';

import { questions } from './questions';

const bannerPicture = window.location.origin + "/assets/images/tofu.png";

const FAQ = () => {
  return (
    <div>
        <Banner picturePath={bannerPicture}/>
        <Accordion questions={questions}/>
    </div>
  )
}

export default FAQ