import React from 'react'
import Banner from '../../components/Banner'
import Text from '../../components/Text'
import { organizationData } from './data'

const bannerPath = `${window.location.origin}/assets/images/vegfood.jpg`

const Organizations = () => {
  return (
    <>
    <Banner picturePath={bannerPath}/>
    <section className="inner-container">
      <Text data={organizationData}/>
    </section>
    </>
  )
}

export default Organizations