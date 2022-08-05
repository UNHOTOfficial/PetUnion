import React from 'react'
import AboutGuarantee from './AboutGuarantee'
import SideMenu from './SideMenu'
import TopCard from './TopCard'

export default function Gurantee() {
  return (
    <div className='container'>
      <TopCard/>
      <div className='d-flex my-4'>
      <AboutGuarantee/>
<SideMenu/>
      </div>
    </div>
  )
}
