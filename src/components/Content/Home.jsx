import React from 'react'
import HotDeals from '../Home/HotDeals/HotDeals'
import ProductContainer from '../Products/ProductContainer'
import '../dark.scss'
import Tiles from '../Home/Tiles/Tiles'
import TopSellers from "../Home/TopSellers/TopSellers"
import New from '../Home/New/New'
import TopSlider from '../Home/TopSlider/TopSlider'
export default function Home() {
  return (
    <div className='content-Home bg-background'>
      <TopSlider/>
      <HotDeals/>
      <Tiles/>
      <TopSellers/>
      <New/>
    </div>
  )
}
