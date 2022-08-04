import React from 'react'
import {Link} from "react-router-dom"

export default function New() {
  return (
    <div className='container-fluid mt-3'>
        <div className='bg-light justify-content-center row p-4 rounded-5'>
            <div className='d-flex flex-column col-6'>
                <img className='rounded-2' src={require("./imgs/New.webp")} alt="New"></img>
                <h4 className='text-capitalize mt-2'>men's shoes collection</h4>
                <p>Get into shoes made with natural materials for supernatural comfort. Available online and in selected stores Allbirds</p>
<Link to={"/"}>See Models</Link>
            </div>
            <div className='d-flex flex-column col-6'>
            <img className='rounded-2' src={require("./imgs/Grid.webp")} alt="Grid"></img>
            <h4 className='text-capitalize mt-2'>You've Got School Spirit</h4>
            <p>Get the gear to prove it.</p>
<Link to={"/"}>See Sports</Link>

            </div>
        </div>
    </div>
  )
}
