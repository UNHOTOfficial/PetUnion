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
      <div className="w-25 border rounded-3 bg-light">
        <div  style={{cursor: 'pointer'}}  onClick={prevStep} className='text-left ms-2 mt-1 text-link'><i className="bi bi-arrow-left m-1"></i>Back</div>
        <main className="form-signin text-center w-100 m-auto p-5">
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="mb-4 Account-Logo" style={{"width":"6rem","height":"auto"}}
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
                className="form-control Account-firstInput bg-input text-dark"
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
                <Link className="ms-1" to={"/help"}>
                  Help Center
                </Link>
              </p>
            </small>
            <div className="checkbox mt-3">
              <p className="text-capitalize text-muted">
                <small>
                  by creating an account, you accept{" "}
                  <Link className='' to="/privacy-policy">privacy policy</Link> and{" "}
                  <Link className='' to="/terms">terms of use</Link>.
                </small>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>  )
}
