import React from 'react'

export default function Contact() {
  return (
    <div className='bg-light text-dark d-flex flex-column align-items-center mt-5 justify-content-evenly py-4' style={{height:"15rem"}}>
        <img style={{width:"5rem"}} src={require("./imgs/support.png")} alt="assistant"></img>
        <p className='text-capitalize fw-bold'>can't find what you are looking for?</p>
        <p>we are always here to help!</p>
        <button className='btn btn-warning'>Contact</button>
    </div>
  )
}
