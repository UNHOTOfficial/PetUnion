import React from 'react'
import FeaturesContainer from '../Home/Features/FeaturesContainer'
import HotDeals from '../Home/HotDeals/HotDeals'
import TopSlider from '../Home/TopSlider'
import ProductContainer from '../Products/ProductContainer'
import '../dark.scss'

export default function Home() {
  return (
    <div className='content-Home bg-background'>
      <TopSlider/>
      <HotDeals/>
      <FeaturesContainer/>
      <ProductContainer/>
    </div>
  )
}
