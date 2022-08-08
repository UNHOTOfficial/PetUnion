import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import { createElement } from 'react';

export default function User() {

const [status, setStatus] = useState(false);

const handleApiKey = (apiKey)=>{
  setStatus(apiKey)
  localStorage.setItem("APi-Key", apiKey)
}
const handleSignOut = ()=>{
  setStatus(false)
  localStorage.clear()
}
const submitForm =()=>{
const user = document.getElementById("exampleInputEmail1").value
const pass = document.getElementById("exampleInputPassword1").value
const data = {
  email: user,
  password: pass
}
 axios.post("https://api.storerestapi.com/auth/login",data).then((res)=>{handleApiKey(res.data.data.access_token)}).catch((error)=>{console.log(error);})
}

const not = <div className='w-25 mx-auto p-4 border rounded-3 my-3'>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" value={"marklyan@gmail.com"} className="form-control email-from" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" value={"simple_password"} className="form-control pass-from" id="exampleInputPassword1"></input>
</div>
<button onClick={submitForm} className="btn btn-primary">Submit</button>
</div>

const signedIn =

<div className='container my-3'>
  <div className='bg-light text-dark rounded-5 border p-4 d-flex flex-column align-items-center justify-content-evenly' style={{height:"20rem"}}>
    <h1 className='text-success'>Signed In Successfully!</h1>
    <p>Api Key:</p>
    <code style={{maxWidth:"50rem"}}>{localStorage.getItem("APi-Key")}</code>
    <button onClick={handleSignOut} className='btn btn-warning text-center w-25 rounded-3 mt-3'>Sign Out</button>
  </div>
</div>

if (localStorage.length <= 0) {
  return (
    <div>
      {not}
    </div>
  )
} else{
  return(
    <div>
    {signedIn}
    </div>
  ) 
}

}
