import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <div className='bg-light text-dark rounded-5 d-flex mt-3 justify-content-evenly py-2'>
        <span className=''><i class="bi bi-arrow-left"></i> Previous</span>
        <span className=''>1</span>
        <span className=''>2</span>
        <span className=''>3</span>
        <span className=''>Next <i class="bi bi-arrow-right"></i></span>
    </div>
  )
}
