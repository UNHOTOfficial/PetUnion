import React from 'react'
import Top from './Top'
import LiveSupport from "./LiveSupport"
import Side from "./Side"

export default function Support() {
  return (
    <div className='container d-flex flex-column my-4' style={{height:"70rem"}}>
      <div className='row'>
      <Top/>
      <Side/>
      </div>
    </div>
  )
}
