import React from 'react'

export default function Rules() {
  return (
    <div className='bg-light text-dark d-flex mt-5'>
        <div className='container d-flex flex-column my-5 align-items-center'>
        <img src={require("./imgs/warning.png")} alt="warning" style={{width:"4rem"}}></img>
        <div className='d-flex flex-column mt-3'>
        <p className='text-capitalize'>keep in mind not all bugs have a gift! only major bugs that put application and user data at risk can be rewarded.<br/> after sending your report, our specialists will make a decision on the reward.</p>
        <p className='text-capitalize'>using bugs to harm application or exploiting in any way is strongly prohibited and can legally be followed.</p>
        </div>
        </div>
    </div>
  )
}
