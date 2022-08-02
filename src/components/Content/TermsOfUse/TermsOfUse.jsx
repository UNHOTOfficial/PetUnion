import React from 'react'
import Content from './Content'
import TableOfContent from './TableOfContent'
import Top from './Top'

export default function TermsOfUse() {
  return (
    <div className='container'>
      <Top/>
      <div className='row'>
      <Content/>
      <TableOfContent/>
      </div>
    </div>
  )
}
