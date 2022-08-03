import React from 'react'
import HotDeals from '../Home/HotDeals/HotDeals'
import TopSlider from '../Home/TopSlider'
import ProductContainer from '../Products/ProductContainer'
import '../dark.scss'
import Tiles from '../Home/Tiles/Tiles'
import TopSellers from "../Home/TopSellers/TopSellers"
export default function Home() {
  return (
    <div className='content-Home bg-background'>
      <TopSlider/>
      <HotDeals/>
      <Tiles/>
      <TopSellers/>
      <ProductContainer/>
    </div>
  )
}
