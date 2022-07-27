import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../dark.scss';
export default function StepTwoEmail(props) {

const [step, setStep]= useState(props.step)
const nextStep = props.nextStep;
const prevStep = props.prevStep;
const handleFormData = props.handleFormData;

  return (
<div className="d-flex justify-content-center mt-5 mb-5">
      <div className="w-25 border rounded">
        <div onClick={prevStep} className='text-left ms-2 Link mt-1'><i className="bi bi-arrow-left m-1"></i>Back</div>
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
            <div className="mb-4 mt-4 d-flex flex-column align-items-start">
              <input
                type="text"
                className="form-control Account-firstInput"
                id=""
                placeholder="Password"
                required
              ></input>
              <small>
                <label className="text-capitalize text-danger ms-2 d-none Account-input-invalid-empty">
                  please fill the input.
                </label>
              </small>{" "}
            </div>           


          
            <button
              onClick={nextStep}
              className="w-100 btn btn-lg btn-warning account-next-button"
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
            <div className="checkbox mt-3">
              <p className="text-capitalize text-muted">
                <small>
                  by creating an account, you accept{" "}
                  <Link className='Link' to="/privacy-policy">privacy policy</Link> and{" "}
                  <Link className='Link' to="/terms">terms of use</Link>.
                </small>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>  )
}
