import React from 'react'
import FeaturesContainer from '../Home/Features/FeaturesContainer'
import HotDeals from '../Home/HotDeals/HotDeals'
import TopSlider from '../Home/TopSlider'
import ProductContainer from '../Products/ProductContainer'

export default function Home() {
  return (
    <div>
      <TopSlider/>
      <HotDeals/>
      <FeaturesContainer/>
      <ProductContainer/>
    </div>
  )
}
