import React from 'react'

export default function TopCard() {
    const collapse = [{
        title: "Learn About ",
        paragraph:""
    }]
  return (
    <div className='bg-light rounded-5 text-dark d-flex p-4'>
        <div className='d-flex flex-column'>
        <h1>Guarantee!</h1>
        <h4>Learn How To Use Your Guarantee.</h4>
        </div>
        <div className='bg-warning d-flex flex-column rounded-5 p-4 align-items-center'>
<h1>Fully Guaranteed</h1>
<div className='d-flex align-items-center'>
<h4 className='text-capitalize'>you can whether use retailer or our Guarantee to make sure your product is safe.</h4>
<img src={require("./imgs/Guarantee.png")} alt="Guarantee" style={{width:"10rem"}}></img>
</div>
        </div>
    </div>
  )
}
