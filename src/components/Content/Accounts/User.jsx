import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"

export default function User() {

const submitForm =()=>{
  const email = document.getElementById('exampleInputEmail1').value;
  const pass = document.getElementById('exampleInputPassword1').value;
  const data = `username: "${email}", password: "${pass}"`
  const ax = axios.post("https://fakestoreapi.com/auth/login", `username: "mor_2314",
  password: "83r5^_"`)
  console.log(ax);
}

    const [user, setUser] = useState();

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users").then(response=>{
        }).catch(error=>{
            console.log(error);
        })
    },[])
  return (
    <div>
<div className='w-25 mx-auto'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control email-from" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control pass-from" id="exampleInputPassword1"></input>
  </div>
  <button onClick={submitForm} className="btn btn-primary">Submit</button>
</div>
    </div>
  )
}
