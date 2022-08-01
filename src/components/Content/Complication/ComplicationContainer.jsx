import React from 'react'
import Form from './Form'
import TopCard from './TopCard'
import Warning from './Warning'

export default function ComplicationContainer() {
  return (
    <div className='container d-flex flex-column'>
<TopCard/>
<Warning/>
<Form/>
    </div>
  )
}