import React from 'react'
import Form from './Form'
import Rules from './Rules'
import Top from './Top'

export default function ReportABug() {
  return (
    <div className=''>
      <div className='container'>
      <Top/>
      <Form/>
      </div>
      <Rules/>
    </div>
  )
}
