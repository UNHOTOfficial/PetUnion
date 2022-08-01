import React from 'react'
import Contact from './Contact'
import Content from './Content'
import Top from './Top'
import TopArticles from './TopArticles'

export default function HelpCenter() {
  return (
    <React.Fragment>
    <div className='container'>
      <Top/>
      <Content/>
      <TopArticles/>
    </div>
    <Contact/>
    </React.Fragment>
  )
}
