import React from 'react'

export default function TopCard() {
  return (
    <div className='bg-light rounded-5 text-dark d-flex p-4'>
        <div className='d-flex flex-column justify-content-around'>
        <h1 className=''>We Got Refund Policy.</h1>
        <h3 className=''>See Below To Know How To Refund Your Products.</h3>
        <button className='btn btn-warning rounded-5 w-25'>Go On!</button>
        </div>
        <div className='bg-warning rounded-5 p-4 d-flex flex-column'>
            <h1>Not Satisfied With Your Order?</h1>
            <div className='d-flex justify-content-around align-items-center'>
            <h4>You Can Always Return.</h4>
                <img style={{width:"5rem"}} src={require('./imgs/refund.png')} alt='Refund'></img>
            </div>
        </div>
    </div>
  )
}
