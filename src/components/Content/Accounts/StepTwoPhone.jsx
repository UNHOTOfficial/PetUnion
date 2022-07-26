import React from 'react'
import { Link } from 'react-router-dom';

export default function StepTwoPhone(props) {
  const nextStep = props.nextStep;
  const prevStep = props.prevStep;

const nextInputOtp = ()=>{
  if (document.activeElement.nextElementSibling != null) {
    document.activeElement.nextElementSibling.focus()
  }else{
    document.activeElement.blur()
  }
} 
const startTimer = ()=>{
  document.querySelector('.counter').innerHTML = '59'
}

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
    <div className="w-25 border rounded">
              <div onClick={prevStep} className='text-left ms-2 Link mt-1'><i class="bi bi-arrow-left m-1"></i>Back</div>
      <main className="form-signin text-center w-100 m-auto p-5">
        <div>
          <div className="d-flex flex-column align-items-center">
            <img
              className="mb-4 Account-Logo"
              src={require("../imgs/Logo/Logo-Black.png")}
              alt=""
              width={72}
              height={57}
            />
            <h1 className="h3 mb-3 fw-normal">Sign In | Sign Up</h1>
          </div>
          <div class="mb-2 mt-4 d-flex flex-column align-items-start">
            <div className='input-group flex-row'>
            <input ondelk onKeyUp={nextInputOtp} className='form-control text-center account-otp' id='0' type='text' inputMode='numeric' pattern='[0-9]' maxLength={1}></input>
            <input onKeyUp={nextInputOtp} className='form-control text-center account-otp' id='1' type='text' inputMode='numeric' pattern='[0-9]' maxLength={1}></input>
            <input onKeyUp={nextInputOtp} className='form-control text-center account-otp' id='2' type='text' inputMode='numeric' pattern='[0-9]' maxLength={1}></input>
            <input onKeyUp={nextInputOtp} className='form-control text-center account-otp' id='3' type='text' inputMode='numeric' pattern='[0-9]' maxLength={1}></input>
            </div>
            <small>
              <label className="text-capitalize text-danger ms-2 d-none Account-input-invalid-empty">
                please fill the input.
              </label>
            </small>{" "}
          </div>
          <div className="checkbox mb-4">
            <p className="text-capitalize text-success">
              <small>
                Code Sent.
              </small>
            </p>
            <div className='d-flex justify-content-center'>
            <p className="text-capitalize text-muted">
              <small onLoad={startTimer}>
                Next Code In: {<p className='counter'></p>}
              </small>
            </p>
              <small className='Link ms-1 account-otp-resend'>Resend</small>
            </div>
          </div>
          <button
            
            className="w-100 btn btn-lg btn-warning account-phone-signin-button"
            type="submit"
          >
            Sign In
          </button>
          <small>
            <p className="mt-4 mb-0 text-muted">
              Need Help?
              <Link className="ms-1 Link" to={"/help"}>
                Help Center
              </Link>
            </p>
          </small>
        </div>
      </main>
    </div>
  </div>
  )
}
