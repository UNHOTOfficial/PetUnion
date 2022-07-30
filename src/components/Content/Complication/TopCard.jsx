import React from 'react'

export default function TopCard() {
  return (
    <div className='bg-light text-dark d-flex rounded-5 p-4 justify-content-between'>
  <div className='d-flex flex-column w-25 justify-content-evenly'>
  <h1>Complication</h1>
  <h4>Make A Complain Here.</h4>
  <button className='btn btn-warning rounded-5 w-50'>Let's Go</button>
  </div>
  <div className='bg-warning d-flex flex-column rounded-5 p-4 w-75 justify-content-evenly'>
<h1>We Are Here To Hear What Is The Problem</h1>
<div className='d-flex  align-items-center justify-content-evenly'>
<h4>Use This Page To Raise A Complain.</h4>
  <img src={require("./imgs/Complaint.png")} alt="complaint" style={{width:"10rem"}}></img>
</div>
  </div>
</div>
  )
}
