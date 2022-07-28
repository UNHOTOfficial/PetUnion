import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='d-flex flex-column align-items-center mt-4 mb-4'>
        <h4 className='text-capitalize'>oops! looks you are lost.</h4>
        <img className='w-25' src={require('./Imgs/404 error lost in space-bro.png')} alt='Not Found'></img>
        <p className='text-capitalize text-center fs-5 text-secondary'>but we are here to help!<br/>either use button bellow to head home,<br/>or use links in header of footer to go to your desired location.</p>
        <Link to={'/'}>
        <button type='button' className='btn btn-warning'>Home</button>
        </Link>
    </div>
  )
}
