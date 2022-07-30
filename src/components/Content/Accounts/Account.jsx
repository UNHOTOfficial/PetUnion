import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Account.scss'
import StepOne from "./StepOne";
import StepTwoEmail from './StepTwoEmail';
import StepTwoPhone from "./StepTwoPhone";
export default function Account() {
  const [step, setstep] = useState(1);
  let [inputType, setInputType] = useState('');

  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };


  const nextButtonHandler = () => {
    const patterns={
      email: '^[^\s@]+@[^\s@]+\.[^\s@]+$',
      phone: '^[0][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'
    }
    
    
        const accountFirstInput = document.querySelector(".Account-firstInput");
        const accountInvalidLabelEmpty = document.querySelector(
          ".Account-input-invalid-empty"
        );
    
        if (accountFirstInput.value === "") {
          accountFirstInput.classList.add("is-invalid");
          accountInvalidLabelEmpty.classList.remove("d-none");
        }else
        if (accountFirstInput.value.match(patterns.email)) {
          setInputType(inputType = 'email')
          nextStep()
        }
        else if (accountFirstInput.value.match(patterns.phone)) {
          setInputType(inputType = 'phone')
          nextStep()
        }
        else if (!accountFirstInput.value.match(patterns.email || patterns.phone)) {
          accountFirstInput.classList.add("is-invalid");
          document.querySelector('.Account-input-invalid-empty').classList.add('d-none')
document.querySelector('.Account-input-invalid-mismatch').classList.remove('d-none')
        }
      };

      const nextEnter = ()=>{
        document.querySelector('.Account-firstInput').addEventListener('keypress',(e)=>{
          if (e.key === "Enter") {
            document.querySelector('.account-next-button').click();
          }
        })
      }


  switch (step) {
    case 1:
      return (
       <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="text-center w-25 border rounded-3 p-5 bg-light">
          <main className="form-signin w-100 m-auto">
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
              <div className="mb-3 mt-4 d-flex flex-column align-items-start">
                <input
                onFocus={nextEnter}
                  type="text"
                  className="form-control Account-firstInput bg-input text-dark"
                  id=""
                  placeholder="Email Or Phone Number"
                  required
                ></input>
                <small>
                  <label className="text-capitalize text-danger ms-2 d-none Account-input-invalid-empty">
                    please fill the input.
                  </label>
                </small>
                <small>
                  <label className="text-capitalize text-danger ms-2 d-none Account-input-invalid-mismatch">
                    please provide correct email or phone.
                  </label>
                </small>
              </div>
              <div className="checkbox mb-4">
                <p className="text-capitalize text-muted">
                  <small>
                    please fill out field to begin your fascinating journey, or continue if you already started!
                  </small>
                </p>
               
              </div>
              <button
                onClick={nextButtonHandler}
                className="w-100 btn btn-lg btn-warning account-next-button"
                type="submit"
              >
                Next!
              </button>
              <small>
                <p className="mt-4 mb-0 text-muted">
                  Need Help?
                  <Link className="ms-1" to={"/help"}>
                    Help Center
                  </Link>
                </p>
              </small>
            </div>
          </main>
        </div>
      </div>
      );
    case 2:
      if (inputType === 'email') {
        
        return (
          <StepTwoEmail nextStep={nextStep} prevStep={prevStep} />
          );
        }
        else if (inputType === 'phone') {
          return(<StepTwoPhone nextStep={nextStep} prevStep={prevStep} />)
        }


    default:
      break;
  }
}
